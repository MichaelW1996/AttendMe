// const RSVPFormHandler = async (event) => {
//   event.preventDefault();
//   console.log("sending name");

//   const firstname = document.querySelector("#guestfname").value.trim();
//   const lastname = document.querySelector("#guestlname").value.trim();

//   if (firstname && lastname) {
//     const response = await fetch("/api/guest/rsvp", {
//       method: "POST",
//       body: JSON.stringify({ firstname, lastname }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       (response) => response.json(); //parse the response
//       console.log("got response"); //confirms a good response (200)
//       //display the results? got responses
//       if (response == []) {
//         //this doesnt find empty responses for some reason?!?!?!
//         console.log("No guest by this name");
//       } else {
//         console.log(`here is response ${response}`);
//         console.log("guest received");
//       }
//     } else {
//       alert("No guests of this name found");
//     }
//   }
// };

const RSVPFormHandler = async (event) => {
  event.preventDefault();

  const firstname = document.querySelector("#guestfname").value.trim();
  const lastname = document.querySelector("#guestlname").value.trim();

  if (firstname && lastname) {
    try {
      const response = await fetch("/api/guest/rsvp", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("got response");
        if (responseData === null) {
          console.log("No guests by this name");
        } else {
          //   console.log("here is response", responseData);
        }
        return { firstname, lastname }; //gives back the names if guest is on list
      } else {
        alert("No guests of this name found");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred");
    }
  }
  return null; //if not in guestlist gives a null reply
};

document.querySelector(".RSVPform").addEventListener("submit", (event) => {
  event.preventDefault(); //prevents a reset
  RSVPFormHandler(event) //checks with back end if invited
    .then((response) => {
      //manages the response
      const [firstname, lastname] = response; //deconstruct to first and last name
      console.log("Response from RSVPFormHandler:", { firstname, lastname }); //log response
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred");
    });
});
