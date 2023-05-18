const guestlistHandler = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch("/api/guest/all", {
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
  event.preventDefault(); // prevents a reset
  guestlistHandler(event) // checks for guestlist
    .then((response) => {
      if (response !== null) {
        // manages the response
        // write code to inject dynamic content into container
        var container = document.getElementById("guestList");
        // Set the innerHTML of the container to display the variables
        container.innerHTML = ""; // clear the container is it has content alreadt
        response.forEach((guest) => {
          const { firstname, lastname } = guest; // destructure first and last name
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
  event.preventDefault();

  const firstname = document.querySelector("#invfname").value.trim();
  const lastname = document.querySelector("#invlname").value.trim();

  if (firstname && lastname) {
    try {
      const response = await fetch("/api/guest/new", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname }),
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
  event.preventDefault(); //prevents a reset
  newinviteHandler(event) //checks sends invitee name to back end
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred");
    });
});
