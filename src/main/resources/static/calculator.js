var count = 2;

function addRow() {
    var table = document.getElementById("myTable");

    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "Activity " + count;
    cell2.innerHTML = "A" + count;
    cell3.innerHTML = `
        <form>
            <input name="weight" type="text">
        </form>
    `;
    cell4.innerHTML = `
        <form id="form1">
            <input name="x" type="text" oninput="updatePercent(this)">
        </form>
        /
        <form id="form2">
            <input name="n" type="text" oninput="updatePercent(this)">
        </form>
    `;
    count++;
}

function meanFunc() {
    let adTD = document.getElementsByTagName('td');
    let len = adTD.length;
    var mean = 0;
    var meanLength = 0;
    for (var i = 3; i < len; i += 5) { //i = grade cell
        const form1Input = adTD[i].querySelector('input[name="x"]');
        const form2Input = adTD[i].querySelector('input[name="n"]');

        let x = Number(form1Input.value);
        let n = Number(form2Input.value);
        if (form1Input.value.length === 0 && form2Input.value.length === 0) {
        } else if (form1Input.value.length === 0 || form2Input.value.length === 0) { //invalidate results
            mean += 1 / 0;
        } else {
            mean += x / n;
            meanLength++;
            console.log(mean);
        }

    }
    let result = mean / (meanLength) * 100 + "%";
    document.getElementsByClassName('results')[0].innerHTML = result;
    if (isNaN(mean / meanLength) || !isFinite(mean / meanLength)) {
        document.getElementsByClassName('results')[0].innerHTML = "Invalid";
    } else {
        document.getElementsByClassName('results')[0].innerHTML = result;
    }
}

function weightedFunc() {
    let adTD = document.getElementsByTagName('td');
    let len = adTD.length;
    var mean = 0;
    var totalWeight = 0;
    for (var i = 3; i < len; i += 5) { //i = grade cell
        const form1Input = adTD[i].querySelector('input[name="x"]');
        const form2Input = adTD[i].querySelector('input[name="n"]');
        const form3Input = adTD[i - 1].querySelector('input[name="weight"]');

        let x = Number(form1Input.value);
        let n = Number(form2Input.value);
        let w = Number(form3Input.value);
        console.log(w);
        if (form1Input.value.length === 0 && form2Input.value.length === 0 && form3Input.value.length === 0) {
        } else if (form3Input.value.length === 0 || form1Input.value.length === 0 || form2Input.value.length === 0) {
            mean += 1 / 0;
        } else {
            mean += x / n * w;
            totalWeight += w;
        }
    }
    let result = mean / totalWeight * 100 + "%";
    if (isNaN(mean / totalWeight) || !isFinite(mean / totalWeight)) {
        document.getElementsByClassName('results')[0].innerHTML = "Invalid";
    } else {
        document.getElementsByClassName('results')[0].innerHTML = result;
    }

}

function updatePercent(inputElement) {
    const cell = inputElement.closest('td');

    const form1Input = cell.querySelector('input[name="x"]');
    const form2Input = cell.querySelector('input[name="n"]');
    const displayDiv = cell.nextElementSibling;

    let x = Number(form1Input.value);
    let n = Number(form2Input.value);

    console.log(`x: ${x}`);
    console.log(`n: ${n}`);
    console.log(`form1: ${form1Input.value}`);
    console.log(`form2: ${form2Input.value}`);
    if (form1Input.value.length === 0 || form2Input.value.length === 0) {
        displayDiv.textContent = ''
    } else if (isNaN(x / n) || !isFinite(x / n)) {
        displayDiv.textContent = 'Invalid'
    } else {
        const percent = x / n * 100 + "%";
        displayDiv.textContent = `${percent}`;
    }
}


