
(function() {
    // Init
    var container1 = document.getElementById("container1"),
        inner1 = document.getElementById("inner1");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container1);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner1.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner1.offsetHeight / 2).toFixed(2),
            (mouse.x / inner1.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner1.style.transform = style;
        inner1.style.animation = style;
        inner1.style.mozTransform = style;
        inner1.style.msTransform = style;
        inner1.style.oTransform = style;
    };

    //-----------------------------------------


    container1.onmouseenter = onMouseEnterHandler;
    container1.onmouseleave = onMouseLeaveHandler;
    container1.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------

(function() {
    // Init
    var container2 = document.getElementById("container2"),
        inner = document.getElementById("inner2");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container2.
    mouse.setOrigin(container2);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner2.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner2.offsetHeight / 2).toFixed(2),
            (mouse.x / inner2.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner2.style.transform = style;
        inner2.style.animation = style;
        inner2.style.mozTransform = style;
        inner2.style.msTransform = style;
        inner2.style.oTransform = style;
    };

    //-----------------------------------------


    container2.onmouseenter = onMouseEnterHandler;
    container2.onmouseleave = onMouseLeaveHandler;
    container2.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------

(function() {
    // Init
    var container3 = document.getElementById("container3"),
        inner = document.getElementById("inner3");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container3.
    mouse.setOrigin(container3);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner3.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner3.offsetHeight / 2).toFixed(2),
            (mouse.x / inner3.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner3.style.transform = style;
        inner3.style.animation = style;
        inner3.style.mozTransform = style;
        inner3.style.msTransform = style;
        inner3.style.oTransform = style;
    };

    //-----------------------------------------


    container3.onmouseenter = onMouseEnterHandler;
    container3.onmouseleave = onMouseLeaveHandler;
    container3.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------

(function() {
    // Init
    var container4 = document.getElementById("container4"),
        inner = document.getElementById("inner4");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container4.
    mouse.setOrigin(container4);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner4.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner4.offsetHeight / 2).toFixed(2),
            (mouse.x / inner4.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner4.style.transform = style;
        inner4.style.animation = style;
        inner4.style.mozTransform = style;
        inner4.style.msTransform = style;
        inner4.style.oTransform = style;
    };

    //-----------------------------------------


    container4.onmouseenter = onMouseEnterHandler;
    container4.onmouseleave = onMouseLeaveHandler;
    container4.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------

(function() {
    // Init
    var container5 = document.getElementById("container5"),
        inner = document.getElementById("inner5");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container5.
    mouse.setOrigin(container5);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner5.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner5.offsetHeight / 2).toFixed(2),
            (mouse.x / inner5.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner5.style.transform = style;
        inner5.style.animation = style;
        inner5.style.mozTransform = style;
        inner5.style.msTransform = style;
        inner5.style.oTransform = style;
    };

    //-----------------------------------------


    container5.onmouseenter = onMouseEnterHandler;
    container5.onmouseleave = onMouseLeaveHandler;
    container5.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------

(function() {
    // Init
    var container6 = document.getElementById("container6"),
        inner = document.getElementById("inner6");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container6.
    mouse.setOrigin(container6);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner6.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner6.offsetHeight / 2).toFixed(2),
            (mouse.x / inner6.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner6.style.transform = style;
        inner6.style.animation = style;
        inner6.style.mozTransform = style;
        inner6.style.msTransform = style;
        inner6.style.oTransform = style;
    };

    //-----------------------------------------


    container6.onmouseenter = onMouseEnterHandler;
    container6.onmouseleave = onMouseLeaveHandler;
    container6.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------

(function() {
    // Init
    var container7 = document.getElementById("container7"),
        inner = document.getElementById("inner7");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container7.
    mouse.setOrigin(container7);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner7.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner7.offsetHeight / 2).toFixed(2),
            (mouse.x / inner7.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner7.style.transform = style;
        inner7.style.animation = style;
        inner7.style.mozTransform = style;
        inner7.style.msTransform = style;
        inner7.style.oTransform = style;
    };

    //-----------------------------------------


    container7.onmouseenter = onMouseEnterHandler;
    container7.onmouseleave = onMouseLeaveHandler;
    container7.onmousemove = onMouseMoveHandler;
})();

//----------------------------------------------------------------------------------------------------------------------------------


(function() {
    // Init
    var container8 = document.getElementById("container8"),
        inner = document.getElementById("inner8");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(thing) {
            var e = thing || window.thing;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container8.
    mouse.setOrigin(container8);

    //-----------------------------------------

    var counter = 0;
    var updateRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % updateRate === 0;
    };

    //-----------------------------------------

    var onMouseEnterHandler = function(thing) {
        update(thing);
    };

    var onMouseLeaveHandler = function() {
        inner8.style = "";
    };

    var onMouseMoveHandler = function(thing) {
        if (isTimeToUpdate()) {
        update(thing);
        }
    };

    //-----------------------------------------

    var update = function(thing) {
        mouse.updatePosition(thing);
        updateTransformStyle(
            (mouse.y / inner8.offsetHeight / 2).toFixed(2),
            (mouse.x / inner8.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner8.style.transform = style;
        inner8.style.animation = style;
        inner8.style.mozTransform = style;
        inner8.style.msTransform = style;
        inner8.style.oTransform = style;
    };

    //-----------------------------------------


    container8.onmouseenter = onMouseEnterHandler;
    container8.onmouseleave = onMouseLeaveHandler;
    container8.onmousemove = onMouseMoveHandler;
})();
//----------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------
