        // Apply styling to AQI cell based on the AQI value
        function applyAqiStyle(cell, aqi) {
            switch (aqi) {
                case 1:
                    cell.className = 'aqi-good';
                    break;
                case 2:
                    cell.className = 'aqi-fair';
                    break;
                case 3:
                    cell.className = 'aqi-moderate';
                    break;
                case 4:
                    cell.className = 'aqi-poor';
                    break;
                case 5:
                    cell.className = 'aqi-very-poor';
                    break;
                default:
                    cell.className = '';
            }
        }
