let table = document.getElementById("table");
let userData = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    userData = json;
    createTable();
  });


function createTable() {
  let table = document.getElementById("userTable");
  let tbody = table.getElementsByTagName("tbody")[0];

  for (let i = 0; i < userData.length; i++) {
    let row = document.createElement("tr");
    let nameCell = document.createElement("td");
    let emailCell = document.createElement("td");

    nameCell.textContent = userData[i].name;
    emailCell.textContent = userData[i].email;

    row.append(nameCell, emailCell);
    tbody.appendChild(row);
  }
}

function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("userTable");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}