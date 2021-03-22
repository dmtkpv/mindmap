(() => {



    // ----------------------
    // Constants
    // ----------------------

    const $note = document.getElementById('note');
    const $map = document.getElementById('map');
    const map = new MindMap($map, { imagesFolder: 'images/png' });



    // ----------------------
    // Resize
    // ----------------------

    window.addEventListener('resize', () => {
        map.destroy();
        map.init();
    });


    // ----------------------
    // Note
    // ----------------------

    const $noteTitle = $note.querySelector('h1');
    const $noteText = $note.querySelector('p');
    const $noteClose = $note.querySelector('a');

    function showNote (planet) {
        const rect = planet.$node.getBoundingClientRect();
        $note.style.left = window.scrollX + rect.left + rect.width / 2 + 'px'
        $note.style.top = window.scrollY + rect.top + rect.height / 2 + 'px'
        $noteTitle.textContent = planet.title;
        $noteText.textContent = planet.note;
        $note.style.display = 'block';
    }

    function hideNote () {
        $note.style.display = 'none';
    }

    map.on('activate:note', showNote);
    map.on('deactivate:note', hideNote);

    $noteClose.addEventListener('click', () => {
        map.emit('deactivate:note');
    });



    // ----------------------
    // Video
    // ----------------------

    const $video = document.getElementById('video');
    let player = null;

    function hideVideo () {
        $video.style.display = 'none';
        player.destroy();
    }

    map.on('activate:video', ({ $node, video }) => {
        const rect = $node.getBoundingClientRect();
        $video.style.left = window.scrollX + rect.left + rect.width / 2 + 'px'
        $video.style.top = window.scrollY + rect.top + rect.height / 2 + 'px'
        $video.style.display = 'block';
        player = new Vimeo.Player('video', {
            url: video.src,
            width: video.width,
            height: video.height,
        });
        player.play();
        player.on('timeupdate', function(data) {
            if (data.percent  > 0.998) map.emit('deactivate:video')
        });
    })

    map.on('deactivate:video', () => {
        hideVideo()
    });


})();