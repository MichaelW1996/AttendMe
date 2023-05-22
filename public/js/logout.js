const logout = async (event) => {
  //when the user clicks logout
  event.preventDefault();
  const response = await fetch("/api/user/logout", {
    //send request to log out route
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout); //puts trigger on log out button
