
    
function submit() {
    var text = document.getElementById('input').value;
    parse(text);
}

function parse(text) {
    var arry = text.split(" ");
    var command = arry[0];
    console.log("The command is " + command);
	if(command == "ADD")
		addCommand(arry);
}

function addfunct(reg1, reg2)
{
	reg1 = reg1 + reg2;
    document.getElementById('reg1').value= reg1;
}

function addCommand(arry)
{
	var n1, n2, n3;
	if(arry.length == 3)
	{
		console.log("The length is 3");
		arry[1].replace(',', '');
		console.log(arry[1]);
		switch(arry[1])
		{
			case "reg1": n1 = document.getElementById('reg1').value; break;
			case "reg2": n2 = document.getElementById('reg2').value; break;
			case "reg3": n3 = document.getElementById('reg3').value; break;
		}
		switch(arry[2])
		{
			case "reg1": n1 = document.getElementById('reg1').value; break;
			case "reg2": n2 = document.getElementById('reg2').value; break;
			case "reg3": n3 = document.getElementById('reg3').value; break;
		}
		addfunct(n1, n2);
	}
}