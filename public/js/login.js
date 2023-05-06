async function submitLogin(event){
    event.preventDefault()
    let user = document.querySelector('#inputUsername').value.trim()
    let password = document.querySelector('#inputPassword').value.trim()
console.log(user, password)
    if (user && password){
        try{
            console.log('if')
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: JSON.stringify({ user, password }),
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