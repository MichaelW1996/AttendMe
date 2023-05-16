const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("received login");

  const username = document.querySelector("#Uname").value.trim();
  const password = document.querySelector("#pass").value.trim();

  if (username && password) {
    console.log(`got input of ${username} and ${password}`);
    const response = await fetch("/api/user/login", {
      //check this login fetch
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/"); //back to the login route
    } else {
      alert("Failed to log in.");
    }
  }
};

//this for when we have a register page?
// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector("#username-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();
//we also want the other feilds for a user they dont use to login such as name

//   if (username && password) {
//     const response = await fetch("/api/user", {
//       method: "POST",
//       body: JSON.stringify({ username, password "& all other feilds for new user"}),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/register"); //back to the signup route
//     } else {
//       alert("Failed to sign up.");//to tell user they have not signed in
//     }
//   }
// };

document
  .querySelector(".loginform")
  .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
