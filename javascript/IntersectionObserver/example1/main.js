const intersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // do something
            console.log(entry);
            observer.unobserve(entry.target);
        }
    });
});

intersectionObserver.observe(element);
