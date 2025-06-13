function createChessboard() {
  const size = parseInt(document.getElementById("sizeInput").value);
  const boardContainer = document.getElementById("boardContainer");

  boardContainer.innerHTML = "";

  const table = document.createElement("table");

  for (let row = 0; row < size; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < size; col++) {
      const td = document.createElement("td");
      const isWhite = (row + col) % 2 === 0;
      td.className = isWhite ? "white" : "black";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  boardContainer.appendChild(table);
}
