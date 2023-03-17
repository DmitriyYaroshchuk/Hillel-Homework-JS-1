const table = document.getElementById('table');
for (let i = 0; i < 10; i++) {
    const row = table.insertRow();
    for (let k = 0; k < 10; k++) {
        const cell = row.insertCell();
        cell.innerHTML = Math.floor(Math.random() * 100);
    }
}
