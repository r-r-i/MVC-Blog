const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log('login form was called')

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password){
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
        });

        if(response.ok){
            document.location.replace('/dashboard');
        } else {
            console.log('Error statment was called')
        }
    }
}

document
    .querySelector('.login-btn')
    .addEventListener('click', loginFormHandler)