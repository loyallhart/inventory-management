function loginUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    if (username.trim() == "") {
      alert("Please enter your username");
      return;
    }
    if (password.trim() == "") {
      alert("Please enter your password");
      return;
    }
    fetch("/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: { "Content-Type": "application/json" }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (data.success) {
        window.location.href = "/dashboard";
      } else {
        alert(data.message);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
  }
