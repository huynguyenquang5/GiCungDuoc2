let table;
table = "<table>"
for (let i = 1; i < 10; i++) {
    table = table + "<tr>";
    for (let j = 1; j <= 10; j++) {
        table = table + "<td>" + i + " * " + j + " = " + i * j + "</td>";
    }
    table = table + "</tr>";
}
table = table + "</table>";
document.write(table);