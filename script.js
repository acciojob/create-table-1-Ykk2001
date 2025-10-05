let sampleTable = document.getElementById("sampleTable");
function insert_Row() {
        //creation of the new row
        let newRow = document.createElement("tr");
        //created two td ele
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        //added inner text into them
        td1.innerText = "New Cell1";
        td2.innerText = "New Cell2";
        //inserted that td inside the newRow
        newRow.appendChild(td1);
        newRow.appendChild(td2);
        //new row inserted before the first child
        sampleTable.insertBefore(newRow, sampleTable.firstChild);
      }
