


function check() {
    let email = document.getElementById('clientMail').value;
    console.log(email);
    if(email.includes('.') && email.includes('@')){
        console.log('ok');
        document.getElementById('clientMail').style.border="1px solid hsl(223, 100%, 88%)";
        document.getElementById('error').style.display="none";
    }else{
        document.getElementById('clientMail').style.border="1px solid hsl(354, 100%, 66%)";
        document.getElementById('error').style.display="block";
        console.log('problem');
    }

}