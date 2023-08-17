document.addEventListener('DOMContentLoaded', function () {
    const reasonRadio = document.querySelectorAll('input[name="contact-reason"]');
    const hourlyRate = document.getElementById('hourly-rate');
    const hourlyRateLabel = document.querySelector('label[for="hourly-rate"]');

    // Hide the hourly rate input and label initially
    hourlyRate.style.display = 'none';
    hourlyRateLabel.style.display = 'none';

    reasonRadio.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'Hiring') {
                hourlyRate.style.display = 'block';
                hourlyRateLabel.style.display = 'block';
            } else {
                hourlyRate.style.display = 'none';
                hourlyRateLabel.style.display = 'none';
            }
        });
    });
});


