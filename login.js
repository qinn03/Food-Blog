
document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("loginButton");
  var loginForm = document.getElementById("loginForm");
  var closeForm = document.getElementById("closeForm");
  
  loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    loginForm.style.display = "block";
  });

  closeForm.addEventListener("click", function() {
    loginForm.style.display = "none";
  });
});

function loginvalidate() {
  var usname = document.getElementById("usname").value; 
  var pw = document.getElementById("pw").value; 

  if (usname === "") {
    alert("Please enter your username!");
    document.getElementById("usname").focus();
    return false;
  }
  
  if (pw === "") {
    alert("Please enter your password!");
    document.getElementById("pw").focus();
    return false;
  }

  alert("Welcome To The World of Culinary! You are successfully logged in!");
  
  
}