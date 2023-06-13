        // Get the date of tomorrow
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);

        // Format the date as a string in "ddd DD MMM YYYY" format
        const options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
        const tomorrowString = tomorrow.toLocaleDateString('en-GB', options).replace(',', '');

        // Update the HTML content with the date of tomorrow
        window.addEventListener('DOMContentLoaded', function () {
            const dateElement = document.getElementById('tomorrowDate');
            dateElement.textContent = tomorrowString;
        });

        // Get the date of 2 days later
        const twoDaysLater = new Date(today);
        twoDaysLater.setDate(today.getDate() + 2);

        // Format the date as a string in "ddd DD MMM YYYY" format
        const twoDaysLaterString = twoDaysLater.toLocaleDateString('en-GB', options).replace(',', '');

        // Update the HTML content with the date of tomorrow
        window.addEventListener('DOMContentLoaded', function () {
            const dateElement = document.getElementById('twoDaysLaterDate');
            dateElement.textContent = twoDaysLaterString;
        });

        // Get the date of 3 days later
        const threeDaysLater = new Date(today);
        threeDaysLater.setDate(today.getDate() + 3);

        // Format the date as a string in "ddd DD MMM YYYY" format
        const threeDaysLaterString = threeDaysLater.toLocaleDateString('en-GB', options).replace(',', '');

        // Update the HTML content with the date of tomorrow
        window.addEventListener('DOMContentLoaded', function () {
            const dateElement = document.getElementById('threeDaysLaterDate');
            dateElement.textContent = threeDaysLaterString;
        });
