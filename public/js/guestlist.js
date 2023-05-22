const guestlistHandler = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/api/guest/all", {
      //call the guest all route - this returns full guestlist to logged in user
      method: "GET",
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData === null) {
        console.log("No guestlist found");
      }
      return responseData;
    } else {
      alert("No guestlist found");
    }
  } catch (err) {
    console.error("Error:", err);
    alert("An error occurred");
  }

  return null; //if no guestlist gives a null reply
};

document.querySelector("#seeguestlist").addEventListener("click", (event) => {
  //button to show guestlist - only shown to organisers
  event.preventDefault(); // prevents a reset
  guestlistHandler(event) // starts the function above
    .then((response) => {
      if (response !== null) {
        // manages the response
        // write code to inject dynamic content into container
        var container = document.getElementById("guestList");
        // Set the innerHTML of the container to display the variables
        container.innerHTML = ""; // clear the container is it has content alreadt
        response.forEach((guest) => {
          const { firstname, lastname } = guest; // destruct first and last name
          const list = document.createElement("li");
          list.textContent = `${firstname} ${lastname}`;
          container.appendChild(list);
          container.style.display = "block"; // Show the container
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred");
    });
});

const newinviteHandler = async (event) => {
  //handles a new invite request
  event.preventDefault();

  const firstname = document.querySelector("#invfname").value.trim();
  const lastname = document.querySelector("#invlname").value.trim();

  if (firstname && lastname) {
    try {
      const response = await fetch("/api/guest/new", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname }), //sends the new invitee name in a json to the back end
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("Guest added");
        return; //gives back the names if guest is on list
      } else {
        alert("Unable to add guest");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred");
    }
  }
  return null; //if not in guestlist gives a null reply
};

document.querySelector(".invform").addEventListener("submit", (event) => {
  //when new invite button is pressed
  event.preventDefault(); //prevents a reset
  newinviteHandler(event) //starts the fucntion above
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred");
    });
});
