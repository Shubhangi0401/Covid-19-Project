const dayCovid = new Covid;

let dayInfo = [];
const choose = document.querySelector('#date');
const outerBox = document.querySelector('.outer-day-box');
const dayData = document.querySelector('.day-data');

function getDayData() {

    dayCovid.getData()
        .then(dayData => {

            dayInfo = dayData.cases_time_series;

            showLatestData(dayInfo[dayInfo.length - 1].date,
                dayInfo[dayInfo.length - 1].dailyconfirmed,
                dayInfo[dayInfo.length - 1].dailyrecovered,
                dayInfo[dayInfo.length - 1].dailydeceased);
        });
}

console.log(dayInfo);

choose.addEventListener('input', () => {

    const value = choose.value;
    const spl = value.split("-");
    const dateValue = spl[2];

    switch (spl[1]) {
        case "01":
            month = "January";
            break;
        case "02":
            month = "February";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "August";
            break;
        case "09":
            month = "September";
            break;
        case "10":
            month = "October";
            break;
        case "11":
            month = "November";
            break;
        case "12":
            month = "December";
            break;
    }

    // console.log(month);

    const concat = dateValue + " " + month + " ";
    let flag = false;
    let dailyCon;
    let dailyDec;
    let dailyRec;
    let date1;

    for (let i = 0; i < dayInfo.length; i++) {

        if (dayInfo[i].date === concat) {
            flag = true;
            date1 = dayInfo[i].date;
            dailyCon = dayInfo[i].dailyconfirmed;
            dailyRec = dayInfo[i].dailyrecovered;
            dailyDec = dayInfo[i].dailydeceased;
            break;
        }
    }
    if (flag === true) {
        showLatestData(date1, dailyCon, dailyRec, dailyDec);
    } else {
        showError(`Please select a date between 30 January and ${dayInfo[dayInfo.length - 1].date}.`);
    }


});

function showError(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.appendChild(document.createTextNode(error));
    dayData.insertBefore(errorDiv, outerBox);
    setTimeout(clearError, 5000);
}

function clearError() { document.querySelector('.error').remove(); }

getDayData();

const showLatestData = (date, conf, rec, dead) => {

    console.log(date, conf, rec, dead);

    document.querySelector('.data-content').innerHTML = `
        
        <span class="d">${date}</span>
        <span class="c">${conf}</span>
        <span class="r">${rec}</span>
        <span class="de">${dead}</span>

        `;
};
