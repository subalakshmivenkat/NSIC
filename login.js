$(document).ready(function() {
    $("#loginForm").submit(function(event) {
      event.preventDefault();
  
      const username = $("#username").val();
      const password = $("#password").val();
  
      // Simple validation for demo purposes
      if (username === "user" && password === "pass123") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  });

