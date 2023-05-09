// Login 
  
const loginUser= async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#inputUsername').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (username && password) {

      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        errorData = await response.json()
        alert(errorData.message);
      }
    }
    setTimeout(() => {
      document.querySelector('.notification').classList.add("hidden");
      document.querySelector('.question').classList.remove("hidden");
    })
  };

  document
  .querySelector('.form-signin')
  .addEventListener('submit', loginUser);

  // Sign up

  const signup= async (event) => {
    event.preventDefault();
    console.log(event)
    document.location.replace('/signup');
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/signup');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
  .querySelector('.signupbtn')
  .addEventListener('click', signup);



  // set(() => {
  //   document.querySelector('.notification').classList.add("hidden");
  //   document.querySelector('.question').classList.remove("hidden");
  // })