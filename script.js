var row = 1;

var entry = document.getElementById("entry");
entry.addEventListener("click",displayDetails);

var row = 1;

function displayDetails(){
	var name = document.getElementById("sender").value;
	var name1 = document.getElementById("receiver").value;
	var account = document.getElementById("account").value;
	var amount = document.getElementById("amount").value;
	var mobile = document.getElementById("mobile").value;
	
	if(!name || !name1 ||!account ||!amount ||!mobile){
		alert("PLEASE FILL ALL DETAILS")
		return;
	}
	
	var display = document.getElementById("display");
	var newRow = display.insertRow(row);
	
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	var cell4 = newRow.insertCell(3);
	var cell5 = newRow.insertCell(4);
	
	cell1.innerHTML = name;
	cell2.innerHTML = name1;
	cell3.innerHTML = account;
	cell4.innerHTML = amount;
	cell5.innerHTML = mobile;
	
	row++;
}