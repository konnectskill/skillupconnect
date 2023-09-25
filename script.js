const stars = document.querySelectorAll('.star');
const starsContainer = document.getElementById('stars');

stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');
        alert(`You rated us ${rating} star(s)! Thank you for your feedback.`);
        // You can send this rating data to your server for analysis if needed.

        // Change the color of the clicked star to red
        stars.forEach((s) => s.classList.remove('selected'));
        star.classList.add('selected');
    });
});
