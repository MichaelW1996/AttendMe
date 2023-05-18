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
        if (responseData === null) {
          console.log("No guests by this name");
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
      if (response !== null) {
        //manages the response
        const { firstname, lastname } = response; //deconstruct to first and last name
        console.log("Response from RSVPFormHandler:", { firstname, lastname });
        console.log(`first name ${firstname}`); //log response
        //write code to inject dynamic content into container
        var container = document.getElementById("guestCheck");
        // Set the innerHTML of the container to display the variables
        container.innerHTML = firstname + " " + lastname + " you're invited!";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred");
    });
});
