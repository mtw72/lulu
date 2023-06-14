// Date div
const todayDiv = document.querySelector('.today');
const tomorrowDiv = document.querySelector('.tomorrow');
const twoDaysLaterDiv = document.querySelector('.two-days-later');
const threeDaysLaterDiv = document.querySelector('.three-days-later');
const currentTimeOfToday = new Date().getHours();

if (currentTimeOfToday < 3) {
    todayDiv.style.width = '420px';
} else if (currentTimeOfToday < 6) {
    todayDiv.style.width = '364px';
} else if (currentTimeOfToday < 9) {
    todayDiv.style.width = '315px';
} else if (currentTimeOfToday < 12) {
    todayDiv.style.width = '262px';
} else if (currentTimeOfToday < 15) {
    todayDiv.style.width = '209px';
} else if (currentTimeOfToday < 18) {
    todayDiv.style.width = '156px';
} else if (currentTimeOfToday < 21) {
    todayDiv.style.width = '104px';
} else {
    todayDiv.style.width = '54px';
    tomorrowDiv.style.width = '415px';
}