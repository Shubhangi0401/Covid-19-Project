const stateCovid = new Covid;

function getStateData() {

    stateCovid.getData()
        .then(stateData => {

            const array = stateData.statewise;
            const stateInfo = [];

            for (let index = 1; index < array.length; index++) {
                stateInfo.push(array[index]);
            }

            stateInfo.forEach(item => {

                document.querySelector('.data-table').innerHTML += `
                    <tr class="entries">
                        <td class="st-ut entry-item">${item.state}</td>
                        <td class="act entry-item">${item.active}</td>
                        <td class="con entry-item">${item.confirmed}</td>
                        <td class="rec entry-item">${item.recovered}</td>
                        <td class="dea entry-item">${item.deaths}</td>
                    </tr>
                `;
            });

        });
}

getStateData();