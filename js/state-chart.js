const stateCovidChart = new Covid;

stateCovidChart.getData()
    .then(allStateData => {

        let stateChart = document.getElementById('stateChart').getContext('2d');

        const SName = allStateData.statewise;
        console.log(SName);

        const stateName = [];
        const stateData = [];

        for (let i = 1; i < SName.length; i++) {
            stateName.push(SName[i].state);
        }
        console.log(stateName);

        for (let i = 1; i < SName.length; i++) {
            stateData.push(SName[i].confirmed);
        }
        console.log(stateData);

        //global options
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 12;
        Chart.defaults.global.defaultFontColor = '#000';
        Chart.defaults.global.defaultFontWeight = 'bolder';

        let firstChart = new Chart(stateChart, {
            type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
            data: {
                labels: stateName,
                datasets: [{
                    data: stateData,
                    backgroundColor: [
                        'rgba(0,0,255, 0.7)',
                        'rgba(34,139,34, 0.7)',
                        'rgba(218,165,32, 0.7)',
                        'rgba(32,178,170, 0.7)',
                        'rgba(47,79,79, 0.7)',
                        'rgba(30,144,255, 0.7)',
                        'rgba(255,255,240, 0.7)',
                        'rgba(221,160,221, 0.7)',
                        'rgba(25,25,112, 0.7)',
                        'rgba(188,143,143, 0.7)',
                        'rgba(199,21,133, 0.7)',
                        'rgba(127,255,212, 0.7)',
                        'rgba(240,128,128, 0.7)',
                        'rgba(0,191,255, 0.7)',
                        'rgba(106,90,205, 0.7)',
                        'rgba(128,0,0, 0.7)',
                        'rgba(139,69,19, 0.7)',
                        'rgba(192,192,192, 0.7)',
                        'rgba(255,255,0, 0.7)',
                        'rgba(255,0,0, 0.7)',
                        'rgba(200,100,190, 0.7)',
                        'rgba(107,142,35, 0.7)',
                        'rgba(60,179,113, 0.7)',
                        'rgba(95,158,160, 0.7)',
                        'rgba(147,112,219, 0.7)',
                        'rgba(128,0,128, 0.7)',
                        'rgba(255,105,180, 0.7)',
                        'rgba(75,0,130, 0.7)',
                        'rgba(112,128,144, 0.7)',
                        'rgba(255,255,240, 0.7)',
                        'rgba(30,144,255, 0.7)',
                        'rgba(0,255,127, 0.7)',
                        'rgba(244,164,96, 0.7)',
                        'rgba(0,255,255, 0.7)',
                        'rgba(0,0,0, 0.7)',
                        'rgba(255,0,255, 0.7)'
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
                        right: 2,
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
