function checkPassword() {
  let messageBox = document.querySelector('#message');
  let password = document.querySelector('#password').value;
  let confirm = document.querySelector('#confirm').value;


  messageBox.style.color = "black";

  if (password.length != 0) {
    if (password == confirm) {
      messageBox.textContent = "Looks good!";
      messageBox.style.backgroundColor = "lightgreen";
    } else {
      messageBox.textContent = "Passwords do not match";
      messageBox.style.backgroundColor = "lightpink";
    }
  } else {
    alert("Password can't be empty!");
    messageBox.textContent = "";
  }
}

