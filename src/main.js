function validar() {
    // pegando o valor do nome pelos names
    var nome = document.getElementById("nome");
    var cpf = document.getElementById("cpf");
    var endereco = document.getElementById("endereco");
    var numero = document.getElementById("numero");
    var celular = document.getElementById("celular");

    // verificar se o nome está vazio
    if (nome.value == "") {
        //Alerta para imprimir na tela abaixo do input ("Nome não informado")
        document.getElementById('msgNome').innerHTML = "Nome não informado";
        document.getElementById('msgCPF').innerHTML = "";
        document.getElementById('msgEnd').innerHTML = "";
        document.getElementById('msgNum').innerHTML = "";
        document.getElementById('msgCel').innerHTML = "";
        //Alerta é exibido pelo navegador
        alert("Nome não informado");      
        nome.focus(); // Deixa o input com o focus        
        return; // retorna a função e não olha as outras condições
    }
    if (cpf.value == "") {
        document.getElementById('msgCPF').innerHTML = "CPF não informado";
        document.getElementById('msgNome').innerHTML = "";
        document.getElementById('msgEnd').innerHTML = "";
        document.getElementById('msgNum').innerHTML = "";
        document.getElementById('msgCel').innerHTML = "";
        alert("CPF não informado");        
        cpf.focus();
        return;
    }
    if (endereco.value == "") {
        document.getElementById('msgEnd').innerHTML = "Endereço não informado";
        document.getElementById('msgNome').innerHTML = "";
        document.getElementById('msgCPF').innerHTML = "";
        document.getElementById('msgNum').innerHTML = "";
        document.getElementById('msgCel').innerHTML = "";
        alert("Endereço não informado");        
        endereco.focus();
        return;
    }
    if (numero.value == "") {
        document.getElementById('msgNum').innerHTML = "Número não informado";
        alert("Numero não informado");
        numero.focus();

    }
    if (celular.value == "") {
        document.getElementById('msgCel').innerHTML = "Número do celular não informado";
        alert("Número do celular não informado");        

        return;
    }
    document.getElementById('msgNome').innerHTML = "";
    document.getElementById('msgCPF').innerHTML = "";
    document.getElementById('msgEnd').innerHTML = "";
    document.getElementById('msgNum').innerHTML = "";
    document.getElementById('msgCel').innerHTML = "";
    alert("Formulário enviado!");

    // envia o formulário
    //formulario.submit();
}