//your JS code here. If required.
const ageInput = document.getElementById("age");
const inputName = document.getElementById("name");
const btn = document.getElementById("btn");
const form = document.querySelector("form");

function handleFormSubmit(e) {
  e.preventDefault();
  const age = parseInt(ageInput.value);
  const namee = inputName.value;
  if (!age || !namee) {
    alert("Please fill the both fields");
    return;
  }
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve({ namee });
      } else {
        reject({ namee });
      }
    }, 4000);
  });

  myPromise
    .then(({ namee }) => alert(`Welcome, ${namee}. You can vote.`))
    .catch(({ namee }) => alert(`Oh sorry ${namee}. You aren't old enough.`));
}
form.addEventListener("submit", handleFormSubmit);
