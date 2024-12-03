

function checkGender() {
    let gender = prompt ("What is your gender? (Male or Female)");

}

if (gender === "Female") {
    alert("You are a girl ! 👩");

} else if (gender === "Male") {
    alert ("You are a boy 👨");
    
}else {
    alert("Invalid input.");
}

checkGender();
