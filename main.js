const form = document.getElementById ('form-atividade');
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
let validaForm = false;

function validaForm(oForms) {
    const formComoArray = oForms.split(' ');
    return formComoArray >= 1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    campoA = parseInt(inputcampoA);
    campoB = parseInt(inputcampoB);

    const mensagemSucesso = `campoA é maior ou igual a CampoB`;
    const mensagemErro = `campoB é maior ou igual a CampoA`; 

    formValido = validaForm(oForms.value);
    
    if (formValido) {

    campoB >= campoA;
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';

    } else { 
        campoA.style.border = '1px solid red';
        campoB.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
    }

    })

    campoA.addEventListener('keyup',function(e) {
        console.log(e.target.value);
        formValido = validaForm(e.target.value);
    });

    campoB.addEventListener('keyup',function(e) {
        console.log(e);
        formValido = validaForm(e.target.value);

        if (!formValido) { 
                campoA.style.border = '1px solid red';
                campoB.style.border = '1px solid red';
            document.querySelector('.error-message').style.display = 'block';
            } else {
                campoA.style = '';
                campoA.style = '';
                document.querySelector('.error-message').style.display = 'none';
            }

    });
