const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("received login");

  const username = document.querySelector("#Uname").value.trim();
  const password = document.querySelector("#pass").value.trim(); //get the user details entered

  if (username && password) {
    const response = await fetch("/api/user/login", {
      //sends request to login route
      method: "POST",
      body: JSON.stringify({ username, password }), //using the details provided
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/rsvp"); //send user to the RSVP page if successful
    } else {
      alert("Failed to log in.");
    }
  }
};
document
  .querySelector(".loginform")
  .addEventListener("submit", loginFormHandler);

//this for when we have a register page
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

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
