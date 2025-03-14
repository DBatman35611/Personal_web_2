// Select all elements with the class "hidden"
const hiddenElements = document.querySelectorAll('.hidden');

// Create an IntersectionObserver
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add the "visible" class to trigger the animation
                entry.target.classList.add('visible');
                // Unobserve the element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5, // Element becomes visible when 50% of it is in view
    }
);

// Observe each hidden element
hiddenElements.forEach((el) => observer.observe(el));