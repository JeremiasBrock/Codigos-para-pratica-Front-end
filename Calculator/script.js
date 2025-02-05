function apertar(valor) {
    document.getElementById('visor').value += valor;
}

function limpar() {
    document.getElementById('visor').value = '';
}

function calcular() {
    let expressao = document.getElementById('visor').value;
    try {
        document.getElementById('visor').value = eval(expressao);
    } catch {
        document.getElementById('visor').value = 'Erro';
    }
}

