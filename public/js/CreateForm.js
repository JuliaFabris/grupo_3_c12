console.log("inputTittle");

// FUNCION PARA EVITAR REPETIR document.querySelector
function qs(element) {
  return document.querySelector(element);
}
//VALIDACIONES DEL FORMULARIO

//VARIABLES PARA OBTENER TODOS LOS ELEMENTOS A VALIDAR
window.onload = () => {
    alert("Mensaje");
    let $inputTitle = qs("#inputTitle"),
      $titleErrors = qs("#error-title");
    console.log($inputTitle),
      $inputDirection = qs("#inputDirection"),
      $errorDirection = qs("#error-Direction"),
      $inputDuration = qs("#inputDuration"),
      $errorDuration = qs("#error-Duration"),
      $inputYear = qs("#input-year"),
      $errorYear = qs("#error-year"),
      $inputTriler = qs("#imput-triler"),
      $errorTriler = qs("#error-triler"),
      $inputPrice = qs("#input-price"),
      $errorPrice = qs("#error-price"),
      $inputImage = qs("#input-image"),
      $imageErrors = qs("#error-image"),
      $inputSinopsis = qs("#imput-sinopsis"),
      $sinopsisErrors = qs("#error-sinopsis"),
      $inputGenres = qs("#input-genres"),
      $errorGenres = qs("#error-genres"),
      $genreName = qs("#genre.name"),
      $form = qs("#form-front");
    $errorform = qs("#errorform");

    let validationsErrors = false;

    $inputTitle.addEventListener("blur", function (e) {
      console.log(e.target.value);
      switch (true) {
        case !$inputTitle.value.trim():
          $titleErrors.innerHTML = "El campo nombre es obligatorio";
          $inputTitle.classList.add("is-invalid");
          validationsErrors = true;
          break;
        case !regExAlpha.test($inputTitle.value):
          $titleErrors.innerHTML = "Ingrese un nombre válido";
          $inputTitle.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $inputTitle.classList.remove("is-invalid");
          $inputTitle.classList.add("is-valid");
          $titleErrors.innerHTML = "";
          validationsErrors = false;
          break;
      }
    });

    $inputDirection.addEventListener("blur", function () {
      switch (true) {
        case !$inputDirection.value.trim():
          $errorDirection.innerHTML = "El campo direccion es obligatorio";
          $inputDirection.classList.add("is-invalid");
          validationsErrors = true;
          break;
        case !regExAlpha.test($inputDirection.value):
          $errorDirection.innerHTML = "Ingresa un apellido válido";
          $inputDirection.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $inputDirection.classList.remove("is-invalid");
          $inputDirection.classList.add("is-valid");
          $errorDirection.innerHTML = "";
          validationsErrors = false;
          break;
      }
    });

    $imputDuration.addEventListener("blur", function () {
      switch (true) {
        case !$imputDuration.value.trim():
          $errorDuration.innerHTML = "El campo duración es obligatorio";
          $inputDuration.classList.add("is-invalid");
          validationsErrors = true;
          break;
        case !regExIMPUTDURATION.test($dni.value):
          $errorDuration.innerHTML = "Debe ingresar una duración";
          $imputDuration.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $imputDuration.classList.remove("is-invalid");
          $imputDuration.classList.add("is-valid");
          $errorDuration.innerHTML = "";
          validationsErrors = false;
          break;
      }
    });

    $imputYear.addEventListener("blur", function () {
      switch (true) {
        case !$imputYear.value.trim():
          $errorYear.innerHTML = "El campo year es obligatorio";
          $imputYear.classList.add("is-invalid");
          validationsErrors = true;
          break;
        case !regExIMPUTYEAR.test($email.value):
          $errorYear.innerHTML = "Debe ingresar un año válido";
          $imputYear.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $imputYear.classList.remove("is-invalid");
          $imputYear.classList.add("is-valid");
          $errorYear.innerHTML = "";
          validationsErrors = false;
          break;
      }
    });

    $imputTriler.addEventListener("blur", function () {
      switch (true) {
        case !$inputTriler.value.trim():
          $errorTriler.innerHTML = "El campo triler es obligatorio";
          $imputTriler.classList.add("is-invalid");
          validationsErrors = true;
          break;
        case !regEximputTriler.test($imputTriler.value):
          $errorTriler.innerHTML = "Debe ingresar un triler";
          $imputTriler.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $$imputTriler.classList.remove("is-invalid");
          $imputTriler.classList.add("is-valid");
          $errorTriler.innerHTML = "";
          validationsErrors = false;
          break;
      }
    });

    $imputPrice.addEventListener("blur", function () {
      switch (true) {
        case !$imputPrice.value.trim():
          $errorPrice.innerHTML = "El campo precio es obligatorio";
          $imputPrice.classList.add("is-invalid");
          validationsErrors = true;
          break;
        case $imputPrice.value !== $imputPrice.value:
          $errorPrice.innerHTML = "Debe ingresar un precio";
          $imputPrice.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $imputPrice.classList.remove("is-invalid");
          $imputPrice.classList.add("is-valid");
          $errorPrice.innerHTML = "";
          validationsErrors = false;
          break;
      }
    });

    $inputImage.addEventListener("change", function fileValidation() {
      let filePath = $inputImage.value, //Capturo el valor del input
        allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i; //Extensiones permitidas
      if (!allowefExtensions.exec(filePath)) {
        //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
        $imageErrors.innerHTML = `${icono}Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)`;
        $imputImage.value = "";
        $imgPreview.innerHTML = "";
        return false;
      } else {
        // Image preview
        if ($inputImage.files && $inputImage.files[0]) {
          let reader = new FileReader();
          reader.onload = function (e) {
            $imgPreview.innerHTML =
              '<img src="' + e.target.result + '" class="edit-form-image"/>';
          };
          reader.readAsDataURL($imputImage.files[0]);
          $imageErrors.innerHTML = "";
          $inputImage.classList.remove("invalid");
        }
      }
    });

    $imputSinopsis.addEventListener("blur", function () {
      switch (true) {
        case !$imputSinopsis.value.trim():
          $sinopsisErrors.innerHTML = "Debes ingresar una sinopsis";
          $imputSinopsis.classList.add("is-invalid");
          validationsErrors = true;
          break;

        case moment().diff(moment($fecha.value), "years") < 18:
          $sinopsisErrors.innerHTML = "Debes tener más de 18 años";
          $imputSinopsis.classList.add("is-invalid");
          validationsErrors = true;
          break;
        default:
          $imputSinopsis.classList.remove("is-invalid");
          $imputSinopsis.classList.add("is-valid");
          $sinopsisErrors.innerHTML = "";
          validationsErrors = false;
          break;
        /*$sexo.addEventListener('blur', function(){
      if(!$sexo.value.trim()){
           $sexErrors.innerHTML = 'Campo requerido';
           $sexo.classList.add('is-invalid')
           validationsErrors = true
       } else {
           $sexo.classList.remove('is-invalid');
           $sexo.classList.add('is-valid');
           $sexErrors.innerHTML = ''
           validationsErrors = false*/
      }
    });

    console.log($inputTitle);

    $terms.addEventListener("click", function () {
      $terms.value = "on";
      $terms.classList.toggle("is-valid");
      $terms.classList.remove("is-invalid");
      $termsErrors.innerHTML = "";
    });

    $form.addEventListener("submit", function (event) {
      event.preventDefault();

      let error = false;
      let elementsForm = this.elements;

      for (let index = 0; index < elementsForm.length - 1; index++) {
        if (
          elementsForm[index].value == "" &&
          elementsForm[index].type !== "file" &&
          elementsForm[index].$inputTitle !== "title"
        ) {
          elementsForm[index].classList.add("is-invalid");
          submitErrors.innerHTML = "Los campos señalados son obligatorios";
          error = true;
          if (!error && !validationsErrors) {
            $form.submit();
          }
        }
      }
    });

    $file.addEventListener("change", function fileValidation() {
      let filePath = $file.value; // Captura el valor del input
      let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
      if (!allowedExtensions.exec(filePath)) {
        //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
        $fileErrors.innerHTML =
          "Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)";
        $file.value = "";
        $imgPreview.innerHTML = "";
        return false;
      } else {
        //Image preview
        console.log($file.files);
        if ($file.files && $file.files[0]) {
          let reader = new FileReader();
          reader.onload = function (e) {
            $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`;
          };
          reader.readAsDataURL($file.files[0]);
          $fileErrors.innerHTML = "";
          $file.classList.remove("is-invalid");
        }
      }
    });
  };

/* let $form = document.querySelector('form');
    let $inputTitle = document.querySelector('#inputTitle');
    let $inputDirection = document.querySelector('#inputDirection');

    form.addEventListener("change", function(e) {
        e.preventDefault();

        form.addEventListener("submit", function(e) {
            e.preventDefault(); {

        if (form.value == "") {

            alert("Los campos tienen que estar completos");
        } else if (form.value.length < 3) {
            alert("El campo title debe tener al menos 3 caracteres");

            } 
   
   

   
   
    let $form = document.querySelector('form');
    let $inputTitle = document.querySelector('#inputTitle');
    let $inputDirection = document.querySelector('#inputDirection');

    $inputTitle.addEventListener('change', (event) => {
        console.log(event.target.value)
    })

    $inputDirection.addEventListener('blur', (event) => {
        console.log('Salí del campo')
    })

    $form.addEventListener('submit', (event) => {
        event.preventDefault()
        alert('Tenes que completar los campos')
    })
*/
