function BMI() {
    const h=document.getElementById('h').value;
    const w=document.getElementById('w').value;
    if (isNaN(h) || isNaN(w)) {
        document.getElementById("result").textContent="Please enter Numbers"
    } 
    else 
    {
    let bmi=w/(h/100*h/100);
    let bmio=(bmi.toFixed(2));
    if (bmio >25 && bmio <=30 ) {
        document.getElementById("result").textContent="Your BMI is " + bmio +", YA BMI of 25 to 29.9 is considered overweight."
    }
    if ( bmio >30 ) {
        document.getElementById("result").textContent="Your BMI is " + bmio +", a BMI of 30 and above is considered obese."
    }
    if ( bmio >=20 && bmio <=25 ) {
        document.getElementById("result").textContent="Your BMI is " + bmio +", a BMI of 20-25 is ideal."
    }
    if ( bmio <20 ) {
        document.getElementById("result").textContent="Your BMI is " + bmio +", you're a bit underweight."
    }
    }
}