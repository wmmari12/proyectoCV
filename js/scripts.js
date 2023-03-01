document.getElementById('boton_color').addEventListener('click', function () {
    document.getElementById("container-mari").style.backgroundColor = '#EAEAEA';
});


document.getElementById('boton_color_default').addEventListener('click', function () {
    document.getElementById("container-mari").style.backgroundColor = '#F9E1F1';
});


document.getElementById('verificar').addEventListener('click',function(){
    swal({
        title: "Gracias!",
        text: "Usted ha verificado la lectura del CV",
        icon: "success",
      });
});