function Verificar() {
    let CEP = document.getElementById('CEP').value;
    let endereço = document.getElementById('endereço').value;
    let numero = document.getElementById('num').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let referencia = document.getElementById('referencia').value;
    let email = document.getElementById('loginEmail').value;
    let senha = document.getElementById('loginSenha').value;
    let telefone = document.getElementById('loginTelefone').value;
    let cpf = document.getElementById('loginCpf').value;
    let datanasc = document.getElementById('loginDatadenascimento').value;

    if (!email || !senha || !CEP || !endereço || !numero || !complemento || !bairro || !cidade || !estado || !referencia || !telefone || !cpf || !datanasc)
    alert("Campos de preenchimento obrigatório. Favor preencher")
}
