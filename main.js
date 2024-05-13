const form = document.getElementById ('form-atividade');

function validaForm(oForms) {
    const formComoArray = oForms.split(' ');
    return formComoArray >= 1;
}

form.addEventListener('submit', function(e) {
    let validaForm = false;
    e.preventDefault();

    campoA = parseInt(inputcampoA);
    campoB = parseInt(inputcampoB);

    const campoA = document.getElementById("campoA").value;
    const campoB = document.getElementById("campoB").value;
    const mensagemSucesso = `campoA é maior ou igual a CampoB`;
    const mensagemErro = `campoB é maior ou igual a CampoA`; 

    if (campoA < campoB){
    const containerMensagemSucesso = document.querySelector('.sucess-mensagem');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';

    } else { 
        (campoA === campoB) 
    document.querySelector('.erro-mensagem').style.display = 'block';
    }

    })