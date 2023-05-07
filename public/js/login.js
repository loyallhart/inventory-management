async function submitLogin(event){
    event.preventDefault()
    let username = document.querySelector('#inputUsername').value.trim()
    let password = document.querySelector('#inputPassword').value.trim()
    if (username && password){
        try{
            console.log('if')
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
              })

            if (response.ok){
                window.location.replace('/')
            } else {
                errorData = await response.json()
                alert(errorData.message)
            }
        } catch (err){
            console.log(err)
        }
    }
}

 let loginForm = document.querySelector('.form-signin')
 loginForm.addEventListener('submit', submitLogin)