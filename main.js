// Option 2 - jQuery Smooth Scroll
/* $('.navbar a').on('click', function(e) {
    if(this.hash !== '') {
        e.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
            },
            1200
        )
    }
}) */

// Option 3 - SmoothScroll Script
/* const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 1800
}); */