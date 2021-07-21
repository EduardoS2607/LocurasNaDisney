function nextChallenge(){
    let allDivs = document.getElementsByClassName('conteudo');
    for (let i=0;i<allDivs.length;i+=1){
      allDivs[i].style.display = 'none';
    }

    let divSelect = document.getElementsByClassName(`conteudo-${criarUnico()}`);
    for (let i=0;i<divSelect.length;i+=1){
        divSelect[i].style.display = 'block';
    }
}

let sorteados = [];
let valorMaximo = 70;

function criarUnico() {
if (sorteados.length == valorMaximo)sorteados = []
let sugestao = Math.ceil(Math.random() * valorMaximo);
while (sorteados.indexOf(sugestao) >= 0) {
    sugestao = Math.ceil(Math.random() * valorMaximo);
}
sorteados.push(sugestao);
return sugestao;
}