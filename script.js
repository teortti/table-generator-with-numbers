//Генератор чисел
function generateNumbers(height, width) {
    let arr = [];
    for (let i = 0; i < width; i++) {
        arr[i] =  [];
        for (let j = 0; j < height; j++) {
            arr[i][j] =  Math.round(Math.random()*500);
        }
    }
    return arr;
}

//Заполнить одну ячейку
function fillCell(rowNumber, columnNumber, value) {
    let row = document.getElementsByTagName('tr');
    let column = document.getElementsByTagName('td');
    tr[rowNumber].getElementsByTagName('td')[columnNumber].innerHTML = value;
}

//Заполнение всей таблицы
function fillTable(table) {
    let numberOfRows = table.getElementsByTagName("tr").length;
    let numberOfColumns = table.getElementsByTagName('td').length;
    tr = table.getElementsByTagName('tr');
    arr = generateNumbers(numberOfColumns, numberOfRows);

    for (let j = 0; j < numberOfRows; j++) {
        for (let i = 0; i < tr[j].getElementsByTagName('td').length; i++) {
        fillCell(j, i, arr[j][i]);
        }
    }
}

table = document.getElementById('table');
document.querySelector("#submit").onclick = function(){
    fillTable(table);}
//console.log(table.rows.length);


/*let numberOfRows = table.getElementsByTagName("tr").length;
tr = table.getElementsByTagName('tr');
arr = generateNumbers(3, 4);

for (let j = 0; j < numberOfRows; j++) {
    for (let i = 0; i < tr[j].getElementsByTagName('td').length; i++) {
    fillCell(j, i, arr[j][i]);
    }
}*/

//console.log(arr.join("\n"));