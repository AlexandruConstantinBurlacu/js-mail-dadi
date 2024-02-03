// array per le mail

const mailArray = [
    'john.doe@email123.com',
    'alice.smith@email456.com',
    'sam.jackson@email789.com',
    'emma.white@emailabc.com',
    'robert.green@emailxyz.com',
    'lisa.miller@email987.com',
    'brian.jones@email321.com',
    'olivia.black@emaildef.com',
    'kevin.wilson@email654.com',
    'mia.brown@emailghi.com',
    'chris.taylor@email000.com',
    'sophia.evans@email999.com',
    'daniel.morris@email888.com',
    'ava.clark@email777.com',
    'michael.young@email666.com',
    'grace.walker@email555.com',
    'jason.martin@email444.com',
    'emily.hill@email333.com',
    'jacob.kelly@email222.com',
    'isabella.cooper@email111.com',
]

console.log(mailArray);

// collegamento pulsante alla mail

document.getElementById("check-email").onclick = function() {
    const userEmail = document.getElementById("your-email").value;

    let mailFound = false;

    for(let i = 0; i < mailArray.length; i++) {
        if(mailArray[i] == userEmail) {
            mailFound = true;
        }
    }

    const accessElement = document.getElementById("access");

    if(mailFound) {
        accessElement.innerHTML = "Welcome back, you're not a bot";
    } else {
        accessElement.innerHTML = "Pay attention, next time we call the police";
    }
}