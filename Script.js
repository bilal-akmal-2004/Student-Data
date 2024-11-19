const studentsData = [
  { userName: "Ghulam", password: "ghul123", email: "ghul123@gmail.com" },
  { userName: "Asharib", password: "asharib123", email: "ash123@gmail.com" },
  { userName: "Bilal", password: "bilal123", email: "bilal123@gmail.com" },
];
function inValidEmail(e) {
  let inputElement = e.target;
  let spanElement = inputElement.nextElementSibling;
  let username = inputElement.value;
  if (
    username.indexOf("@") === -1 ||
    username.indexOf(".") === -1 ||
    username.length <= username.indexOf(".") + 2
  ) {
    spanElement.style.display = "block";
    spanElement.innerText = "Make sure to enter the correct email format !";
    return;
  }
  spanElement.style.display = "none";
  return;
}
function inValidPassword(e) {
  let inputElement = e.target;
  let spanElement = inputElement.nextElementSibling;
  let username = inputElement.value;
  if (username.length < 5) {
    spanElement.style.display = "block";
    spanElement.innerText = "Password should be 5 characters long";
    return;
  }
  spanElement.style.display = "none";
  return;
}
function inValidUserName(e) {
  let inputElement = e.target;
  let spanElement = inputElement.nextElementSibling;
  let username = inputElement.value;
  if (username.length < 3) {
    spanElement.style.display = "block";
    spanElement.innerText = "Username should be 3 characters long";
    return;
  }
  spanElement.style.display = "none";
  return;
}
function checkOnSubmit(e) {
  e.preventDefault();

  let correctDiv = document.getElementsByClassName("correctDiv")[0];
  let errorDiv = document.getElementById("error");
  errorDiv.innerHTML = ``;
  let displayUserName = document.getElementById("studentNameDisplay");
  let displayPassword = document.getElementById("passwordNameDisplay");
  let displayEmail = document.getElementById("emailNameDisplay");
  let studentName = document.getElementById("username").value;
  let studentPassword = document.getElementById("password").value;
  let studentEmail = document.getElementById("email").value;
  displayUserName.innerHTML = ``;
  displayPassword.innerHTML = ``;
  displayEmail.innerHTML = ``;
  console.log(studentName);
  let found = false;
  for (let i = 0; i < studentsData.length; i++) {
    if (
      studentsData[i].userName === studentName &&
      studentsData[i].password === studentPassword &&
      studentsData[i].email === studentEmail
    ) {
      correctDiv.style.display = "flex";
      displayUserName.innerHTML = `<h2>Username: ${studentName}</h2>`;
      displayPassword.innerHTML = `<h2>Password: ${studentPassword}</h2>`;
      displayEmail.innerHTML = `<h2>Email: ${studentEmail}</h2>`;
      found = true;
      break;
    }
  }
  if (!found) {
    correctDiv.style.display = "none";
    errorDiv.innerHTML = `<h1>Data not found !</h1>`;
  }
}
