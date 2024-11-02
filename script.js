// Plan selection handling
const planCards = document.querySelectorAll('.plan-card');
const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        planCards.forEach(card => card.classList.remove('selected'));
        if (radio.checked) {
            planCards[index].classList.add('selected');
        }
    });
});

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering! We will contact you shortly.');
});