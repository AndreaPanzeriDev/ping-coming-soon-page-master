
let email = document.getElementById('clientMail').value;

function check() {
    console.log(email);
    if(email.includes('.')){
        console.log('ok');
    }else{
        document.getElementById('clientMail').style.border="1px solid hsl(354, 100%, 66%)";
        console.log('problem');
    }

}