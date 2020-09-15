const covidChart = new Covid;

function chartjs() {

    covidChart.getData()
        .then(chartData => {

            let myChart = document.getElementById('myChart').getContext('2d');

            const arr = chartData.cases_time_series;
            const last30 = arr.slice(Math.max(arr.length - 30, 0));
            let last30Date = Object.entries(last30);

            let arr1 = [];

            let data30 = [];

            for (let index = 0; index < last30Date.length; index++) {
                arr1.push(last30Date[index][1].date);
            }
            console.log(arr1);

            for (let index = 0; index < last30Date.length; index++) {
                data30.push(last30Date[index][1].dailyconfirmed);
            }
            console.log(data30);

            // Global Options
            Chart.defaults.global.defaultFontFamily = 'Lato';
            Chart.defaults.global.defaultFontSize = 9;
            Chart.defaults.global.defaultFontColor = '#000';

            let firstChart = new Chart(myChart, {
                type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
                data: {
                    labels: arr1,
                    datasets: [{
                        // label: 'Population',
                        data: data30,
                        backgroundColor: [
                            'rgba(255, 107, 107, 0.7)',
                        ],
                        borderWidth: 2,
                        borderColor: '#8d0801',
                        hoverBorderWidth: 3,
                        hoverBorderColor: '#000'
                    }]
                },
                options: {
                    title: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    },
                    layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    },
                    tooltips: {
                        enabled: true
                    }
                }
            });
        });
}

chartjs();
