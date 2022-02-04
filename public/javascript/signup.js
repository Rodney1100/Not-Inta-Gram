const signUpForm = document.querySelector(".signup-form");
function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    fetch("/api/users/", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        document.location.replace('/');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

signUpForm.addEventListener("submit", signupFormHandler);
