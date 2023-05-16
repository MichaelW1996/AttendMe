function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RSVPFormHandler = async (event) => {
  event.preventDefault();
  console.log("sending name");

  const firstname = document.querySelector("#guestfname").value.trim();
  const lastname = document.querySelector("#guestlname").value.trim();

  if (firstname && lastname) {
    const response = await fetch("/api/guest/rsvp", {
      method: "POST",
      body: JSON.stringify({ firstname, lastname }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      //display the results?
      console.log(response);
    } else {
      alert("No guests of this name found");
    }
  }
};

document.querySelector(".RSVPform").addEventListener("submit", RSVPFormHandler);
