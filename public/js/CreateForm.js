  function qs(element) {
      return document.querySelector(element)
  }

  window.addEventListener('load'), function () {

    let $inputTitle = qs('#inputTitle'),
    $titleErrors = qs('#error-title'),

    $inputDirection = qs('#inputDirection'),
    $errorDirection = qs('#error-Direction'),

    $inputDuration = qs('#inputDuration'),
    $errorDuration = qs('#error-Duration'),

    $imputYear= qs('#input-year'),
    $errorYear = qs('#error-year'),

    $inputTriler = qs('#imput-triler'),
    $errorTriler = qs('#error-triler'),

    $imputPrice = qs('#input-price'),
    $errorPrice = qs('#error-price'),

    $imputImage = qs('#input-image'),
    $imageErrors = qs('#error-image'),

    $imputSinopsis = qs('#imput-sinopsis'),
    $sinopsisErrors = qs('#error-sinopsis'),

    $inputGenres = qs('#input-genres'),
    $errorGenres = qs('#error-genres'),

    $genreName =qs('#genre.name'),

    $form = qs('#form')
  

  let validationsErrors = false;

  $inputTitle.addEventListener('blur', function() {
      switch (true) {
          case !$inputTitle.value.trim():
              $titleErrors.innerHTML = 'El campo nombre es obligatorio';
              $inputTitle.classList.add('is-invalid');
              validationsErrors = true
              break;
          case !regExAlpha.test($inputTitle.value):
              $titleErrors.innerHTML = 'Ingrese un nombre válido';
              $inputTitle.classList.add('is-invalid');
              validationsErrors = true
              break
          default:
              $inputTitle.classList.remove('is-invalid');
              $inputTitle.classList.add('is-valid');
              $titleErrors.innerHTML = "";
              validationsErrors = false;
              break;
      }
  })

  $inputDirection.addEventListener('blur', function(){
      switch (true) {
          case !$inputDirection.value.trim():
              $errorDirection.innerHTML = 'El campo apellido es obligatorio'
              $inputDirection.classList.add('is-invalid')
              validationsErrors = true
              break;
          case !regExAlpha.test($inputDirection.value):
              $errorDirection.innerHTML = 'Ingresa un apellido válido'
              $inputDirection.classList.add('is-invalid')
              validationsErrors = true
              break;    
          default:
              $inputDirection.classList.remove("is-invalid");
              $inputDirection.classList.add('is-valid')
              $errorDirection.innerHTML = ""
              validationsErrors = false
              break;
      }
  })
  
  $imputDuration.addEventListener('blur', function(){
      switch (true) {
          case !$imputDuration.value.trim():
              $errorDuration.innerHTML = 'El campo DNI es obligatorio'
              $inputDuration.classList.add('is-invalid')
              validationsErrors = true
              break;
          case !regExIMPUTDURATION.test($dni.value):
              $errorDuration.innerHTML = 'Debe ingresar un DNI válido'
              $imputDuration.classList.add('is-invalid')
              validationsErrors = true
              break;    
          default:
              $imputDuration.classList.remove("is-invalid");
              $imputDuration.classList.add('is-valid')
              $errorDuration.innerHTML = ""
              validationsErrors = false
              break;
      }
  })

  $imputYear.addEventListener('blur', function(){
      switch (true) {
          case !$imputYear.value.trim():
              $errorYear.innerHTML = 'El campo year es obligatorio'
              $imputYear.classList.add('is-invalid')
              validationsErrors = true
              break;
          case !regExIMPUTYEAR.test($email.value):
              $errorYear.innerHTML = 'Debe ingresar un año válido'
              $imputYear.classList.add('is-invalid')
              validationsErrors = true
              break;    
          default:
              $imputYear.classList.remove("is-invalid");
              $imputYear.classList.add('is-valid')
              $errorYear.innerHTML = ""
              validationsErrors = false
              break;
      }
  })

  $imputTriler.addEventListener('blur', function(){
      switch (true) {
          case !$inputTriler.value.trim():
              $errorTriler.innerHTML = 'El campo contraseña es obligatorio'
              $imputTriler.classList.add('is-invalid')
              validationsErrors = true
              break;
          case !regEximputTriler.test($pass.value):
              $errorTriler.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
              $imputTriler.classList.add('is-invalid')
              validationsErrors = true
              break;    
          default:
              $$imputTriler.classList.remove("is-invalid");
              $imputTriler.classList.add('is-valid')
              $errorTriler.innerHTML = ""
              validationsErrors = false
              break;
      }
  })

  $imputPrice.addEventListener('blur', function(){
      switch (true) {
          case !$imputPrice.value.trim():
              $errorPrice.innerHTML = 'El campo contraseña es obligatorio'
              $imputPrice.classList.add('is-invalid')
              validationsErrors = true
              break;
          case $imputPrice.value !== $pass.value:
              $errorPrice.innerHTML = 'Las contraseñas no coinciden';
              $imputPrice.classList.add('is-invalid')
              validationsErrors = true
              break;    
          default:
              $imputPrice.classList.remove("is-invalid");
              $imputPrice.classList.add('is-valid')
              $errorPrice.innerHTML = ""
              validationsErrors = false
              break;
      }
  })

  $imputImage.addEventListener('blur', function() {
      switch (true) {
          case !$imputImage.value.trim():
              $imageErrors.innerHTML = 'Debes ingresar tu fecha de nacimiento';
              $imputImage.classList.add('is-invalid');
              validationsErrors = true;
              break;
          case moment($fecha.value) > moment():
              $imageErrors.innerHTML = 'Fecha inválida';
              $imputImage.classList.add('is-invalid');
              validationsErrors = true;
              break;
          case moment().diff(moment($fecha.value), 'years') < 18:
              $imageErrors.innerHTML = 'Debes tener más de 18 años';
              $imputImage.classList.add('is-invalid');
              validationsErrors = true;
              break;    
          default:
              $imputImage.classList.remove('is-invalid');
              $imputImage.classList.add('is-valid');
              $imageErrors.innerHTML = "";
              validationsErrors = false;
              break;
      }
  })



  $imputSinopsis.addEventListener('blur', function() {
    switch (true) {
        case !$imputSinopsis.value.trim():
            $sinopsisErrors.innerHTML = 'Debes ingresar tu fecha de nacimiento';
            $imputSinopsis.classList.add('is-invalid');
            validationsErrors = true;
            break;
        case moment($fecha.value) > moment():
            $sinopsisErrors.innerHTML = 'Fecha inválida';
            $imputSinopsis.classList.add('is-invalid');
            validationsErrors = true;
            break;
        case moment().diff(moment($fecha.value), 'years') < 18:
            $sinopsisErrors.innerHTML = 'Debes tener más de 18 años';
            $imputSinopsis.classList.add('is-invalid');
            validationsErrors = true;
            break;    
        default:
            $imputSinopsis.classList.remove('is-invalid');
            $imputSinopsis.classList.add('is-valid');
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
  })




  
  $terms.addEventListener('click', function (){
      $terms.value = "on"
      $terms.classList.toggle('is-valid')
      $terms.classList.remove('is-invalid')
      $termsErrors.innerHTML = ""
  })

  $form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      let error = false;
      let elementsForm = this.elements;

      for (let index = 0; index < elementsForm.length - 1; index++){
          if(elementsForm[index].value == ''
          && elementsForm[index].type !== 'file'
          && elementsForm[index].name !== 'apellido'
          ){
              elementsForm[index].classList.add('is-invalid');
              submitErrors.innerHTML = 'Los campos señalados son obligatorios';
              error = true;
          }
      }

      if(!$terms.checked){
          $terms.classList.add('is-invalid');
          $termsErrors.innerHTML = 'Debes aceptar los términos y condiciones';
          error = true;
      }

      if(!error && !validationsErrors){
          $form.submit()
      }

  })

  $file.addEventListener('change', function fileValidation(){
      let filePath = $file.value; // Captura el valor del input
      let allowedExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i;
      if(!allowedExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
          $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)'
          $file.value = '';
          $imgPreview.innerHTML = '';
          return false;
      }else{
          //Image preview
          console.log($file.files)
          if($file.files && $file.files[0]){
              let reader = new FileReader();
              reader.onload = function (e) {
                  $imgPreview.innerHTML = `<img src="${e.target.result}" alt="">`
              };
              reader.readAsDataURL($file.files[0]);
              $fileErrors.innerHTML = '';
              $file.classList.remove('is-invalid')
          }
      }
  })

}


  
  
  
  
  
  
  
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




  