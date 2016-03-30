/**
 * gallery
 * version 1.0
 * by @chenjunxyf
 */

(function(factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory(window.jQuery));
    } else {
        factory(window.jQuery);
    }
}(function($) {
    if(!$) {
        return console.warn('Unslider needs jQuery');
    }

    var Gallery = function(context, options) {
        var self = this;

        self.defaults = {
            selectors: {
                container: 'ul:first',
                slides: 'li'
            },

            autoplay: false,

            delay: 3000,

            speed: 750,

            keys: {
                prev: 37,
                next: 39
            }
        };

        // defaults
        self.$context = context;
        self.options = {};

        // set elements blank
        self.$container = null;
        self.$slides = null;
        self.$nav = null;

        // index
        self.total = 0;
        self.current = 0;

        // for autoplay
        self.interval = null;

        self.init = function(options) {
            self.options = $.extend({}, self.defaults, options);

            self.$container = self.$context.find(self.options.selectors.container);
            self.$slides = self.$container.children(self.options.selectors.slides);

            self.calculateSlides();
        };

        self.calculateSlides = function() {
            var prop = 'width';

            self.total = self.$slides.length;
            self.$container.css(prop, (self.total * 100) + '%');
            self.$slides.css(prop, (100 / self.total) + '%');
        }

        self.start = function() {
            self.interval = setTimeout(function() {
                self.next();
            }, self.options.delay);

            return self;
        };

        self.stop = function() {
            clearTimeout(self.interval);

            return self;
        };

        self.initKeys = function() {

        };

        self.setIndex = function(to) {
            if (to < 0) {
                to = self.total - 1;
            }

            self.current = Math.min(Math.max(0, to), self.total - 1);

            // nav
            
            return self;
        };

        self.animate = function(to, dir) {
            if (to === 'first') to = 0;
            if (to === 'last') to = self.total;

            if (isNaN(to)) {
                return self;
            }

            if (self.options.autoplay) {
                self.stop().start();
            }

            self.setIndex(to);


            return self;
        };

        self.prev = function() {

        };

        self.next = function() {

        };

        self._move = function () {

        };

        return self.init(options);
    };


    $.fn._active = function(className) {
        return this.addClass(className).siblings().removeClass(className);
    };

    $._ucfirst = function(str) {
        //  Take our variable, run a regex on the first letter
        return (str + '').toLowerCase().replace(/^./, function(match) {
            //  And uppercase it. Simples.
            return match.toUpperCase();
        });
    };

    $.fn._move = function() {
        this.stop(true, true);
        return $.fn[$.fn.velocity ? 'velocity' : 'animate'].apply(this, arguments);
    };

    // setup plugin
    $.fn.gallery = function(options) {
        console.log(this);
        var gallery = new Gallery(this, options);

        return gallery;
    }
}));


























