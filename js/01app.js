const covid = new Covid;

function getInfo() {

    covid.getData()
        .then(users => {

            let len = users.cases_time_series.length;
            let tot = users.tested.length;
            const confirmed = Number(users.statewise[0].confirmed);
            const migrate = Number(users.statewise[0].migratedother);

            // ------------------------------ home page js ---------------------------------

            updateCount(document.querySelector('.total'), confirmed + migrate);
            updateCount(document.querySelector('.plus'), users.cases_time_series[len - 1].dailyconfirmed);
            document.querySelector('.updated').innerHTML = `${users.statewise[0].lastupdatedtime}`;

            updateCount(document.querySelector('.act'), users.statewise[0].active);

            updateCount(document.querySelector('.rec'), users.statewise[0].recovered);
            updateCount(document.querySelector('.plus-recovered'), users.cases_time_series[len - 1].dailyrecovered);

            updateCount(document.querySelector('.dea'), users.statewise[0].deaths);
            updateCount(document.querySelector('.plus-deaths'), users.cases_time_series[len - 1].dailydeceased);

            updateCount(document.querySelector('.tes'), users.tested[tot - 1].totalsamplestested);
            updateCount(document.querySelector('.plus-tests'), users.tested[tot - 1].samplereportedtoday);

            document.querySelector('.caption').innerHTML = `<p class="date">Date : ${users.cases_time_series[len - 1].date}</p>`;
            document.querySelector('.daily-data1').innerHTML = `${users.cases_time_series[len - 1].dailyconfirmed}`;
            document.querySelector('.daily-data2').innerHTML = `${users.cases_time_series[len - 1].dailyrecovered}`;
            document.querySelector('.daily-data3').innerHTML = `${users.cases_time_series[len - 1].dailydeceased}`;

        });
}

function updateCount(element, number) {
    let num = +number;
    const speed = 100;
    const update = () => {
        const count = +element.innerText;
        const inc = num / speed;

        if (count < num) {
            element.innerText = Math.ceil(count + inc);
            setTimeout(update, 1);
        } else {
            element.innerText = number;
        }
    };
    update();
}

getInfo();