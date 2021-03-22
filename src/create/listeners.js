import Config from '@/config'

export default function (map) {



    // ----------------------
    // Helpers
    // ----------------------

    function find (className, $node) {
        while ($node && $node.classList) {
            if ($node.classList.contains(className)) return $node;
            $node = $node.parentNode;
        }
    }



    // ----------------------
    // Elements
    // ----------------------

    const $svg = map.$node.querySelector('svg');
    const $planets = $svg.querySelectorAll('g.mm-planet');
    const $overlay = $svg.querySelector('.mm-overlay');



    // ----------------------
    // Planets
    // ----------------------

    const planets = Array.from($planets).map($planet => {
        const $group = $planet.parentNode;
        const $next = $group.nextElementSibling;
        const $moons = $group.querySelectorAll('.mm-moon');
        const $circle = $group.querySelector('circle');
        const m = +$group.getAttribute('data-moon-margin');
        const r = +$circle.getAttribute('r') + (m || Config.moon.margin) + Config.moon.r;

        const moonAnimations = Array.from($moons).map(($moon, i) => {
            const a = Math.PI * 2 / $moons.length * i;
            const x = r * Math.cos(a);
            const y = r * Math.sin(a);
            return gsap.to($moon, { x, y, paused: true, duration: .3 })
        })

        const transform = $group.getAttribute('transform').split(' ');
        const tx = +transform[0].split('(')[1];
        const ty = +transform[1].split(')')[0];

        map.animations = map.animations.concat(moonAnimations);
        return { $planet, $group, $next, moonAnimations, tx, ty }
    })



    // ----------------------
    // Variables
    // ----------------------

    let active = {}



    // ----------------------
    // Video
    // ----------------------

    function clickVideo ($video) {
        const $node = $video.parentNode;
        const src = $video.getAttribute('data-video-src');
        const width = +$video.getAttribute('data-video-width');
        const height = +$video.getAttribute('data-video-height');
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        // const $planet = $video.parentNode;
        // if (!active.planet || active.planet.$planet !== $planet) clickPlanet($planet);
        map.emit('activate:video', { $node, video: { src, width, height } });
    }



    // ----------------------
    // Planet
    // ----------------------

    function getNote ($node) {
        return {
            $node,
            note: $node.querySelector('.mm-note').textContent,
            title: $node.querySelector('.mm-title').textContent
        }
    }

    function clickPlanet ($planet) {
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        if (active.planet) {
            if (active.planet.$planet !== $planet) map.emit('deactivate:planet');
            else return map.emit('activate:note', getNote(active.planet.$group));
        }
        const planet = planets.find(planet => planet.$planet === $planet);
        map.emit('activate:planet', planet);
    }

    function clickMoon ($moon) {
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        map.emit('activate:note', getNote($moon));
    }

    function scalePlanet (planet) {
        const r = planet.$group.querySelector('circle').getAttribute('r');
        const s = Config.r[0] / r;
        const $svg = map.$node.querySelector('svg');
        const {x, y, width, height} = $svg.viewBox.baseVal;
        planet.scaling = {}
        planet.scaling.data = {
            x: planet.tx,
            y: planet.ty,
            s: 1
        }
        planet.scaling.animation = gsap.to(planet.scaling.data, {
            x: width / 2,
            y: height / 2,
            s,
            onUpdate () {
                planet.$group.setAttribute('transform', `translate(${planet.scaling.data.x - r * planet.scaling.data.s} ${planet.scaling.data.y - r * planet.scaling.data.s}) scale(${planet.scaling.data.s})`)
            }
        })
    }

    function unScalePlanet (planet) {
        planet.scaling.animation.kill();
        const r = +planet.$group.querySelector('circle').getAttribute('r');
        planet.scaling.animation = gsap.to(planet.scaling.data, {
            x: planet.tx + r,
            y: planet.ty + r,
            s: 1,
            onUpdate () {
                planet.$group.setAttribute('transform', `translate(${planet.scaling.data.x - r * planet.scaling.data.s} ${planet.scaling.data.y - r * planet.scaling.data.s}) scale(${planet.scaling.data.s})`)
            }
        })
    }



    // ----------------------
    // Click listener
    // ----------------------

    $svg.addEventListener('click', event => {
        const $video = find('mm-video', event.target);
        if ($video) return clickVideo($video);
        const $planet = find('mm-planet', event.target);
        if ($planet) return clickPlanet($planet);
        const $moon = find('mm-moon', event.target);
        if ($moon) return clickMoon($moon);
        if (active.video) map.emit('deactivate:video');
        if (active.note) map.emit('deactivate:note');
        if (active.planet) map.emit('deactivate:planet');
    })

    $svg.addEventListener('click', event => {
        const shown = Object.keys(active).some(key => active[key]);
        $overlay.style.display = shown ? 'block' : 'none'
    })



    // ----------------------
    // Map listener
    // ----------------------

    map.on('activate:video', video => {
        active.video = video;
    }, true)

    map.on('deactivate:video', () => {
        active.video = null;
        const shown = Object.keys(active).some(key => active[key]);
        $overlay.style.display = shown ? 'block' : 'none'
    }, true)

    map.on('activate:note', note => {
        active.note = note;
    }, true)

    map.on('deactivate:note', () => {
        active.note = null;
    }, true)

    map.on('activate:planet', planet => {
        $svg.appendChild(planet.$group);
        planet.moonAnimations.forEach(animation => animation.play());
        scalePlanet(planet)
        active.planet = planet;
    }, true)

    map.on('deactivate:planet', () => {
        active.planet.moonAnimations.forEach(animation => animation.reverse());
        unScalePlanet(active.planet)
        $svg.insertBefore(active.planet.$group, active.planet.$next);
        active.planet = null;
    }, true)



    // ----------------------
    // Video icon animatiob
    // ----------------------

    const $videos = map.$node.querySelectorAll('.mm-video');

    Array.from($videos).forEach($video => {

        const w = 47;
        const x = +$video.getAttribute('x')
        const y = +$video.getAttribute('y')

        const data = { s: 1 };

        const animation = gsap.to(data, {
            s: 1.3,
            repeat: -1,
            duration: 0.5,
            onUpdate () {
                $video.setAttribute('transform', `translate(${(1 - data.s) * (x + w / 2)} ${(1 - data.s) * (y + w / 2)}) scale(${data.s})`)
            }
        }).yoyo(true)

        map.animations.push(animation);

    })


}