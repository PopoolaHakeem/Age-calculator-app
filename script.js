

function calculateAge() {

    const Day = document.getElementById('day').value;
    const Month = document.getElementById('month').value - 1;
    const Year = document.getElementById('year').value;

    const birthdate = new Date(Year, Month, Day)
    const today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getFullMonth() - birthdate.getFullMonth();
    let days = today.getFullDay() - birthdate.getFullDay()

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;

    alert('hello')
}