const form = document.getElementById ('form-atividade');
const campoA = document.getElementById("campoA");
const campoB = document.getElementById("campoB");
let formValido = false;

function atribuiForm(valorA, valorB) {
    return parseInt(valorB) > parseInt(valorA); //Aqui valida o valor do campoB e CampoA
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorA = campoA.value;
    const ValorB = camporB.value;

    const mensagemSucesso = `campoB é maior ou igual a CampoA`;
    const mensagemErro = `campoA é maior ou igual a CampoB`; 

    formValido = atribuiForm(valorA, valorB); //Aqui é passado os 2 parâmentros a serem validados
    
    if (formValido) {

    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';

    campoA.value = '';
    campoB.value = '';

    document.querySelector('.error-message').style.display = 'none'; //Para deixar oculta a mensagem de erro

    } else { 
        campoA.style.border = '1px solid red';
        campoB.style.border = '1px solid red';
    document.querySelector('error-message').innerHTML = mensagemErro; //Aqui vai ficar a mensagem de erro
    document.querySelector('.error-message').style.display = 'block'; //Exibi a mesma
    }

    });

    campoA.addEventListener('keyup',function(e) {
        const valorA = e.target.value;
        const valorB = campoB.value;
        formValido = atribuiForm(valorA, valorB);

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

    campoB.addEventListener('keyup',function(e) {
        const valorA = campoA.value;
        const valorB = e.target.value;
        formValido = atribuiForm(valorA, valorB);

        if (!formValido) { 
                campoA.style.border = '1px solid red';
                campoB.style.border = '1px solid red';
            document.querySelector('error-message').innerHTML = mensagemErro; // Aqui vai ficar a mensagem de erro
            document.querySelector('.error-message').style.display = 'block'; // Exibi a mesma
            } else {
                campoA.style.border = '';
                campoA.style.border = '';
                document.querySelector('.error-message').style.display = 'none';
            }

    });