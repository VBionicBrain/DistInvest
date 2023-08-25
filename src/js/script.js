function addAtivo(){
    const listAtivos = document.getElementById('ativos');
    const ativo = document.createElement('input');
    const labelAtivo=document.createElement('label');
    let nomeAtivo=document.getElementById('nomeAtivo').value;
    ativo.classList.add('ativo');
    ativo.setAttribute('type','number')
    ativo.setAttribute('id',nomeAtivo)
    labelAtivo.setAttribute('for',nomeAtivo)
    labelAtivo.setAttribute('id',nomeAtivo)
    if (nomeAtivo!=''){
    listAtivos.insertAdjacentElement("afterbegin",ativo)
    listAtivos.insertAdjacentElement("afterbegin",labelAtivo)
    labelAtivo.insertAdjacentText("afterbegin",nomeAtivo.toUpperCase())
    document.getElementById('nomeAtivo').value=''
    }
    else {
        alert('Inserir nome do ativo')
    }
    
}