var a, b, c, d;
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
var fail = 0;

function submitButton(a, b, c, d){
    if(a.length === 0){
        document.getElementById("Fname").style.border="rgb(219, 73, 37) solid 2px";
        alert("Please Enter Your First Name");
        var fail = 1;
    }
    else if(b.length === 0){
        document.getElementById("Fname").style.border="white solid 2px";
        document.getElementById("Lname").style.border="rgb(219, 73, 37) solid 2px";
        alert("Please Enter Your Last Name");
        var fail = 1;
    }
    else if(c === "Blank"){
        document.getElementById("Fname").style.border="white solid 2px";
        document.getElementById("Lname").style.border="white solid 2px";
        document.getElementById("Gender").style.border="rgb(219, 73, 37) solid 2px";
        alert("Please Select Your Gender");
        var fail = 1;
    }
    else if(d.length === 0){
        document.getElementById("Fname").style.border="white solid 2px";
        document.getElementById("Lname").style.border="white solid 2px";
        document.getElementById("Gender").style.border="white solid 2px";
        document.getElementById("Phone").style.border="rgb(219, 73, 37) solid 2px";
        alert("Please Enter Your Phone Number");
        var fail = 1;
    }
    else(fail = 0, document.getElementById("Fname").style.border="white solid 2px", document.getElementById("Lname").style.border="white solid 2px", document.getElementById("Gender").style.border="white solid 2px", document.getElementById("Phone").style.border="white solid 2px");

    if(fail === 0){
        if(a.match(letters)){
            if(b.match(letters)){
                if(d.match(numbers)){
                    alert("Information Entered Correctly");
                    document.getElementById("N").innerHTML = "Name: " + a + " " + b;
                    document.getElementById("G").innerHTML = "Gender: " + c;
                    document.getElementById("P").innerHTML = "Phone Number: " + d;
                }
                else(fail = 1, alert("Please Enter a Valid Phone Number"), document.getElementById("Phone").style.border="rgb(219, 73, 37) solid 2px", document.getElementById("Lname").style.border="white solid 2px", document.getElementById("Fname").style.border="white solid 2px");
            }
            else(fail = 1, alert("Enter a Valid Last Name"), document.getElementById("Lname").style.border="rgb(219, 73, 37) solid 2px", document.getElementById("Fname").style.border="white solid 2px");
        }
        else(fail = 1, alert("Enter a valid First Name"), document.getElementById("Fname").style.border="rgb(219, 73, 37) solid 2px")
    }
}


