// form validation checking
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("validationTooltip02");

eyeicon.onclick = () => {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "/Photo/Login/eye-icons/eye-open.webp";
  } else {
    password.type = "password";
    eyeicon.src = "/Photo/Login/eye-icons/eye-close.webp"
  }
}
