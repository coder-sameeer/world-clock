        let a;
        let b;
        let time;
        let date;
        function updateTime() {
            setInterval(() => {
                const timezone = document.getElementById('timezoneSelector').value;
                a = new Intl.DateTimeFormat('en-GB', {
                    timeZone: timezone,
                    timeStyle: 'medium',
                    hour12: true
                }).format(time);
                b = new Intl.DateTimeFormat('en-GB', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }).format(date);
                document.getElementById("time").innerHTML = a;
                document.getElementById("date").innerHTML = b;
            }, 1000);
        }