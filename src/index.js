import '@/index.css'
import template from 'lodash.template'
import Config from '@/config'
import Image from '@/image.svg'
import createBorders from '@/create/borders'
import createLines from '@/create/lines'
import createListeners from '@/create/listeners'
const compile = template(Image);

export default class MindMap {



    // ----------------------
    // Constructor
    // ----------------------

    constructor ($node, options) {
        this.listeners = [];
        this.$node = $node;
        this.$node.classList.add('mm');
        this.animations = [];
        this.options = options
        this.init();
    }

    init () {
        const nw = this.$node.offsetWidth;
        const nh = this.$node.offsetHeight;
        const s = Math.min(nw, nh) / Config.size;
        const w = nw / s;
        const h = nh / s;
        const x = (w - Config.size) / 6;
        const y = (h - Config.size) / 6;        
        const dir = this.options.imagesFolder;
        const x1 = x, x2 = x * 2, x3 = x * 3, x4 = x * 4, x5 = x * 5, x6 = x * 6;
        const y1 = y, y2 = y * 2, y3 = y * 3, y4 = y * 4, y5 = y * 5, y6 = y * 6;
        this.$node.innerHTML = compile({ w, h, x1, x2, x3, x4, x5, x6, y1, y2, y3, y4, y5, y6, dir });
        createBorders(this);
        createLines(this);
        createListeners(this);
    }
    
    destroy () {
        Object.keys(this.listeners).forEach(key => {
            this.listeners[key].forEach(data => {
                if (data.removable) this.off(key, data.handler)
            })
        })
        this.animations.forEach(animation => animation.kill());
    }






    // ----------------------
    // Events
    // ----------------------

    on (event, handler, removable) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push({ handler, removable });
    }

    off (event, handler) {
        if (!this.listeners[event]) return;
        const index = this.listeners[event].findIndex(data => data.handler === handler);
        if (index > -1) this.listeners[event].splice(index, 1);
    }

    emit (event, param) {
        if (!this.listeners[event]) return;
        this.listeners[event].forEach(data => data.handler(param, this));
    }



}