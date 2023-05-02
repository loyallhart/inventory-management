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
}...