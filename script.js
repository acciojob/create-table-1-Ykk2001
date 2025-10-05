let sampleTable = document.getElementById("sampleTable");
 function insert_Row() {
        //creation of the new row
        let newRow = sampleTable.insertRow(0)
        //created two td ele
        let cell1=newRow.insertCell(0)
        let cell2=newRow.insertCell(1);
        //added inner text into them
        cell1.innerText = "New Cell1";
        cell2.innerText = "New Cell2";
        
      }
        