const buyItem = () => {
  alert("Aêêê!!!! Produto adicionado ao carrinho! 🎉");
};

document
  .getElementById("button-submit")
  .addEventListener("click", validateForm);

function validateForm() {
  if (
    document.getElementById("name").value != "" &&
    document.getElementById("email").value != ""
  ) {
    alert("Prontinho! Agora você receberá as novidades por e-mail :)");
  } else {
    alert("Ops! Por favor, preencha os campos nome e-mail.");
  }
}

const form = document.getElementById("register");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let registrationData = {
    name,
    email,
  };

  let convertData = JSON.stringify(registrationData);

  localStorage.setItem("informations", convertData);

  name.value = "";
  email.value = "";
});
