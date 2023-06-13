// Date div
const todayDiv = document.querySelector('.today');
const threedayslaterDiv = document.querySelector('.three-days-later');
const currentTimeOfToday = new Date().getHours();

if (currentTimeOfToday < 3) {
    todayDiv.style.width = '420px';
    threedayslaterDiv.style.display = 'none';
} else if (currentTimeOfToday < 6) {
    todayDiv.style.width = '364px';
    threedayslaterDiv.style.display = 'none';
} else if (currentTimeOfToday < 9) {
    todayDiv.style.width = '317px';
} else if (currentTimeOfToday < 12) {
    todayDiv.style.width = '262px';
} else if (currentTimeOfToday < 15) {
    todayDiv.style.width = '208px';
} else if (currentTimeOfToday < 18) {
    todayDiv.style.width = '156px';
} else if (currentTimeOfToday < 21) {
    todayDiv.style.width = '104px';
} else {
    todayDiv.style.width = '52px';
}