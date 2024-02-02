document.getElementById('button').addEventListener('click', function (){
    const emailField = document.getElementById('user-email')
    const email = emailField.value;

    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;


    if (email === "abu.saidking@gmail.com" && password === '01823567254a@') {
        window.location.href = 'inside.html'
    }
    else {
        alert("Invalid user")
    }
})


