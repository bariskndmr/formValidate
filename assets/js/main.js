const username = document.getElementById('username'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      rePassword = document.getElementById('re-password'),
      form = document.getElementById('form');

function error(input,message){
    input.className = 'error';
    var errorMessage = input.nextElementSibling;
    errorMessage.innerHTML = message;
}

function successful(input){    
    input.className = 'successful';
    var errorMessage = input.nextElementSibling;
    errorMessage.innerHTML = "";
    
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)){
        successful(input);
    }
    else{
        error(input, 'hatalı bir mail adresi');
    }
}

function checkPassword(input){
    if(input.value===password.value){
        successful(input);
    }
    else{
        error(input, 'şifreler uyuşmuyor');
        error(password,'');
    }
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input,`${input.id} hatalı.`);
        }
        else{
            successful(input);
        }
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username,password]);
    checkPassword(rePassword)
    checkEmail(email);
})
