
let email = document.getElementById('clientMail');

function check() {

    if(email.includes('.')){
        console.log('ok');
    }else{
        document.getElementById('clientMail').style.border="1px solid hsl(354, 100%, 66%)";
        console.log('problem');
    }

}