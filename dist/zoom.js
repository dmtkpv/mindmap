(() => {


    // ----------------------
    // Elements
    // ----------------------

    const $map = document.getElementById('map');
    const $zoomIn = document.getElementById('zoom-in');
    const $zoomOut = document.getElementById('zoom-out');
    const $zoomVal = document.getElementById('zoom-val');
    let $svg = null



    // ----------------------
    // Scene
    // ----------------------

    const scene = {
        x: 0,
        y: 0,
        minScale: 1,
        maxScale: 2,
        zoom: 0,

        get scale () {
            return this.minScale * Math.pow(this.maxScale / this.minScale, this.zoom);
        }

    }

    function render () {
        $svg.style.transform = `translate(${scene.x}px, ${scene.y}px) scale(${scene.scale})`;
        $zoomVal.textContent = 100 + Math.floor(100 * scene.zoom) + '%';
    }

    function zoomTo (origin, zoom) {
        const { left, top } = $map.getBoundingClientRect();

        const x = origin.x - left;
        const y = origin.y - top;

        const x0 = (x - scene.x) / scene.scale;
        const y0 = (y - scene.y) / scene.scale;

        zoom = Math.max(zoom, 0);
        zoom = Math.min(zoom, 1);

        scene.zoom = zoom;
        scene.x = x - x0 * scene.scale;
        scene.y = y - y0 * scene.scale;
        render();
    }



    // ----------------------
    // Resize
    // ----------------------

    function resize () {
        $svg = document.querySelector('#map svg');
        scene.zoom = 0;
        scene.x = 0;
        scene.y = 0;
    }

    window.addEventListener('resize', resize);
    resize();



    // ----------------------
    // Drag & drop
    // ----------------------

    let drag = false;

    function getEvent (event) {
        return event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0] || event;
    }

    function start (event) {
        if (event.touches && event.touches.length > 1) return end();
        const e = getEvent(event);
        drag = {
            clientX: e.clientX,
            clientY: e.clientY,
            sceneX: scene.x,
            sceneY: scene.y
        }
    }

    function move (event) {
        if (!drag) return;
        const e = getEvent(event);
        scene.x = drag.sceneX + e.clientX - drag.clientX;
        scene.y = drag.sceneY + e.clientY - drag.clientY;
        render();
        event.preventDefault();
    }

    function end () {
        drag = false;
    }

    $map.addEventListener('mousedown', start);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', end);
    document.addEventListener('mouseleave', end);
    $map.addEventListener('touchstart', start);
    document.addEventListener('touchmove', move, { passive: false });
    document.addEventListener('touchend', end);
    document.addEventListener('touchcancel', end);



    // ----------------------
    // Wheel
    // ----------------------

    $map.addEventListener('wheel', event => {
        event.preventDefault();
        if (event.deltaY > 0 && scene.zoom === 0) return;
        if (event.deltaY < 0 && scene.zoom === 1) return;
        const delta = -event.deltaY / 1000;
        const origin = { x: event.clientX, y: event.clientY };
        zoomTo(origin, scene.zoom + delta);
    })



    // ----------------------
    // Pinch
    // ----------------------

    let pinch = false;

    function getDist (event) {
        const w = event.touches[0].clientX - event.touches[1].clientX;
        const h = event.touches[0].clientY - event.touches[1].clientY;
        return Math.hypot(w, h);
    }

    function getOrigin (event) {
        const x1 = Math.max(event.touches[0].clientX, event.touches[1].clientX);
        const x2 = Math.min(event.touches[0].clientX, event.touches[1].clientX);
        const y1 = Math.max(event.touches[0].clientY, event.touches[1].clientY);
        const y2 = Math.min(event.touches[0].clientY, event.touches[1].clientY);
        return {
            x: x1 - (x1 - x2) / 2,
            y: y1 - (y1 - y2) / 2,
        }
    }

    function pinchStart (event) {
        if (event.touches.length !== 2) return pinchEnd();
        pinch = {};
        pinch.dist = getDist(event);
        pinch.zoom = scene.zoom;
        pinch.origin = getOrigin(event);
    }

    function pinchMove (event) {
        if (!pinch) return;
        const dist = getDist(event);
        const delta = (dist - pinch.dist) / 500;
        zoomTo(getOrigin(event), pinch.zoom + delta);
        event.preventDefault();
    }

    function pinchEnd () {
        pinch = false;
    }

    $map.addEventListener('touchstart', pinchStart);
    document.addEventListener('touchmove', pinchMove, { passive: false });
    document.addEventListener('touchend', pinchEnd);
    document.addEventListener('touchcancel', pinchEnd);



    // ----------------------
    // Zoom control
    // ----------------------

    function getZoomOrigin () {
        const { left, top, width, height } = $map.getBoundingClientRect();
        return { x: left + width / 2, y: top + height / 2 }
    }

    $zoomIn.addEventListener('click', () => {
       zoomTo(getZoomOrigin(), scene.zoom + 0.1);
    })

    $zoomOut.addEventListener('click', () => {
        zoomTo(getZoomOrigin(), scene.zoom - 0.1);
    })











})();