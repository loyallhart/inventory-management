// function loginUser() {
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
  
    const loginUser= async (event) => {
      event.preventDefault();
    
      const username = document.querySelector('#username-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();

      if (username && password) {

        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert(response.statusText);
        }
      }
      setTimeout(() => {
        document.querySelector('.notification').classList.add("hidden");
        document.querySelector('.question').classList.remove("hidden");
      })
    };

    document
    .querySelector('.login-form')
    .addEventListener('submit', loginUser);

    // if (username.trim() == "") {
    //   alert("Please enter your username");
    //   return;
    // }
    // if (password.trim() == "") {
    //   alert("Please enter your password");
    //   return;
    // }
    // fetch("/login", {
    //   method: "POST",
    //   body: JSON.stringify({ username: username, password: password }),
    //   headers: { "Content-Type": "application/json" }
    // })
    // .then(function(response) {
    //   return response.json();
    // })
    // .then(function(data) {
    //   if (data.success) {
    //     window.location.href = "/dashboard";
    //   } else {
    //     alert(data.message);
    //   }
    // })
    
  

 
    setTimeout(() => {
      document.querySelector('.notification').classList.add("hidden");
      document.querySelector('.question').classList.remove("hidden");
    })

  