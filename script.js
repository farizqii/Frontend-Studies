function hello() {
    alert("Hello! You are welcome to my website.");
}

function showtime() {
    var now = new Date();
    alert(now);
}

function textChecker(){
    var textField1 = document.getElementById("textField1");
    if(textField1.value == ""){
        alert("Please enter a value in the text field.");
    }
    else{
        alert("You entered: " + textField1.value);
    }
}