

const classCard = document.querySelectorAll('.card');

for(const element of classCard){
    element.setAttribute('style', 'background-color: #da7421;');
}


const tituloCard = document.querySelectorAll('.titulo-card');

for(const element of tituloCard){
    element.setAttribute('style', 'color: #2B385B')
}


const descricaoCard = document.querySelectorAll('.descricao-card');

for(const element of descricaoCard){
    element.setAttribute('style', 'color: #ffff; margin-top: 50px;');
    element.innerHTML = 'descricao modificada pelo javascript';
}


const btnEdit = document.querySelectorAll('.botao-editar');

for(const element of btnEdit){
    element.setAttribute('style', 'background-color: green; padding: 5px; border: none; border-radius: 5px; color: #ffff; margin-top: 50px; cursor: pointer;');
    element.setAttribute('onclick', 'editarCard();');
}

function editarCard(){
   alert("clicou")
}

const btnApagar = document.querySelectorAll('.botao-apagar');

for(const element of btnApagar) {
    element.setAttribute('style', 'background-color: red; padding: 5px; border: none; border-radius: 5px; color: #ffff; margin-top: 50px; cursor: pointer;');
    element.setAttribute('onclick', 'apagarCard();');
}

function apagarCard(){
    // alert('clicou')
    const confirmUser = prompt('Deseja apagar o card? \n Digite S para sim \n Digite N para nao ');

    if(confirmUser === 'S' || confirmUser === 's'){
        alert('Confirmado!');
    }else if( confirmUser === 'N' || confirmUser === 'n'){
        alert('Cancelou!' );
    }
}
