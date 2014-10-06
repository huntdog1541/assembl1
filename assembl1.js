
    
function submit() {
    var text = document.getElementById('input').value;
    parse(text);
}

function parse(text) {
    text.split(" ");
    text.split(",");
    var command = text[0];
    console.log("The command is " + command + " from " + text);
    var n3 = 3;
    var n4 = 4;
    addfunct(n3, n4);
}

function addfunct(reg1, reg2)
{
    var num1, num2;
    console.log(reg1);
    console.log(reg2);
    if(document.getElementById(reg1) == null)
        num1 = 0;
    else
        num1 = document.getElementById(reg1).value;
    
    if(document.getElementById(reg2) == null)
        num2 = 0;
    else
        num2 = document.getElementById(reg2).value;
    
    num1 = num1 + num2;
    console.log(num1);
    document.getElementById(reg1).value = num1;
}
