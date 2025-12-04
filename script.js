var elems = document.querySelectorAll(".elem");

elems.forEach(function(val) {
    var img = val.querySelector("img");
    
    // Performance Fix: Dimensions ko pehle hi store kar lo
    var rect = val.getBoundingClientRect();

    val.addEventListener("mouseenter", function() {
        // Jab mouse enter kare, tabhi ek baar refresh karo (scroll handle karne ke liye)
        rect = val.getBoundingClientRect();
        img.style.opacity = 1;
    });

    val.addEventListener("mouseleave", function() {
        img.style.opacity = 0;
    });

    val.addEventListener("mousemove", function(dets) {
        // Tumhara original logic, bas ab 'rect' variable use kar rahe hain
        // taaki browser ko baar-baar calculate na karna pade.
        
        img.style.left = dets.x + "px";
        img.style.top = (dets.y - rect.top) + "px";
    });
});