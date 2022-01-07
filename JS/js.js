
var forms=document.querySelectorAll(".needs-validation");
Array.prototype.slice.call(forms).forEach(function(form) {
  form.addEventListener("submit", function(event)
  {
    if(!form.checkValidity()){
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
});


//Cookies
const BotonAceptar=document.getElementById('btn_cookies');
const avisoCookies=document.getElementById('avisocookies');
if(!localStorage.getItem('aceptadas')){
  avisoCookies.classList.add('activo');
}

BotonAceptar.addEventListener('click',() => {
  avisoCookies.classList.remove('activo');

  localStorage.setItem('aceptadas', true);
});
