// 1st box
let btn1 = document.getElementById('btn1');

function calculateAge() {
            let result = document.getElementById('result1');

            let dob = document.getElementById('dob').value;
            dob = new Date(dob).getFullYear();

            let todayDate = document.getElementById('today-date').value;
            todayDate = new Date(todayDate).getFullYear();

            let age = todayDate - dob;

            if (age >= 18) {
                result.textContent = "Congratulations!";
            } else {
                result.textContent = "Sorry, you are under 18.";
            }
}

btn1.addEventListener('click', calculateAge);


// 2nd box
let btn2 = document.getElementById('btn2');

function eligible() {
    let result = document.getElementById('result2');

    let age = document.getElementById('age').value;

    if(age >= 18) {
        // console.log("voter");
        result.textContent = "Voter";
    } else {
        // console.log("non-voter");
        result.textContent = "non-Voter";
    }
}

btn2.addEventListener('click',eligible);