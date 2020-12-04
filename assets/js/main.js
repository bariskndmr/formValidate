const username = document.getElementById('username'),
      email = document.getElementById('email'),
      password = document.getElementById('password'),
      rePassword = document.getElementById('re-password'),
      form = document.getElementById('form');

function error(input, message){
    input.classList = 'is-invalid';
    var errorMessage = input.nextElementSibling;
    errorMessage.innerHTML = `${input.id} hatalı.`
}

function successful(input){    
    var errorMessage = input.nextElementSibling;
    errorMessage.innerHTML = "";
    input.classList = 'is-valid';
    
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input);
        }
        else{
            successful(input);
        }
    })
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username,email,password,rePassword]);
})


