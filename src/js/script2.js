let carteira = [
    {
        "nome": "AMBEV",
        "ticker": "ABEV3",
        "nota": 30
    }, {
        "nome": "AES Brasil",
        "ticker": "AESB3",
        "nota": 50
    }, {
        "nome": "ALUPAR",
        "ticker": "ALUP4",
        "nota": 70
    }, {
        "nome": "B3",
        "ticker": "B3SA3",
        "nota": 60
    }, {
        "nome": "BB Seguridade",
        "ticker": "BBSE3",
        "nota": 80
    }, {
        "nome": "Banestes",
        "ticker": "BEES3",
        "nota": 70
    }, {
        "nome": "Camil",
        "ticker": "CAML3",
        "nota": 0
    }, {
        "nome": "Copel",
        "ticker": "CPLE6",
        "nota": 70
    }, {
        "nome": "Caixa Seguridade",
        "ticker": "CXSE3",
        "nota": 100
    }, {
        "nome": "Itausa",
        "ticker": "ITSA4",
        "nota": 100
    }, {
        "nome": "Klabin",
        "ticker": "KLBN3",
        "nota": 50
    }, {
        "nome": "Odontoprev",
        "ticker": "ODPV3",
        "nota": 40
    }, {
        "nome": "SANEPAR",
        "ticker": "SAPR4",
        "nota": 60
    }, {
        "nome": "TAESA",
        "ticker": "TAEE3",
        "nota": 90
    }, {
        "nome": "ISA CETEP",
        "ticker": "TRPL4",
        "nota": 80
    },

]
var listAtivos = document.getElementById('ativos');

function addAtivo(nomeAtivo) {
    
    const ativo = document.createElement('input');
    const labelAtivo = document.createElement('label');
    ativo.classList.add('ativo');
    ativo.setAttribute('type', 'number');
    ativo.setAttribute('id', nomeAtivo);
    labelAtivo.setAttribute('for', nomeAtivo);
    listAtivos.insertAdjacentElement('beforeEnd', labelAtivo);
    listAtivos.insertAdjacentElement('beforeEnd', ativo);
    labelAtivo.insertAdjacentText('afterbegin', nomeAtivo.toUpperCase());

}

function construCampos() {
    if (listAtivos.innerHTML == '') {
        for (let ativo of carteira) {
            addAtivo(ativo.ticker)
        }
        
    }
    distAporte()
}

function distAporte() {
    let aporte = parseInt(document.getElementById('valorAporte').value)
    const camposAtivos = document.getElementsByClassName('ativo')
    const totalNotas = carteira.reduce((total, atual) => {
        return total + atual.nota
    }, 0)
    for (let campo=0; campo<camposAtivos.length; campo++) {
        camposAtivos[campo].value = parseInt((aporte/totalNotas)*carteira[campo].nota)
        
    }
}