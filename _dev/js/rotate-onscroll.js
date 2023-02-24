(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function() {
    let image1 = document.querySelector(".subtraction1");
    let image2 = document.querySelector(".subtraction2");
    image1.style.transform = "rotate("+window.pageYOffset/8+"deg)";
    image2.style.transform = "rotate("+window.pageYOffset/8+"deg)";
})