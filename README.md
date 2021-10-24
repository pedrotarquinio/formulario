# Formulário de Cadastro Pessoal - Atração

O objetivo do desafio individual é criar um formulário simples de cadastro pessoal com alertas de preenchimento obrigatório e envio de formulário ao submeter. Para esse desafio, foi utilizado as linguagens: HTML, CSS e JavaScript e como extra, foi implementado framework JQuery Mask.
#
O mesmo contém os campos (input) abaixo:
- Nome
- CPF
- RG
- Sexo
- Endereço
- Número
- Bairro
- Cidade
- Estado
- CEP
- Telefone Fixo
- Celular
#

Os campos obrigatórios que contém asteriscos são:
- Nome
- CPF
- Endereço 
- Número Telefone Celular

Ao enviar o formulário sem preencher os dados nos campos obrigatórios, os mesmos irão emitir alerta no navegador: 
- alert("Nome não informado");
- alert("CPF não informado");
- alert("Endereço não informado");
- alert("Número do celular não informado");

Também foi implementado no CSS e JavaScript para ser exibido abaixo nos campos obrigatórios com fonte cor vermelha.

Utilizado framework JQuery Mask para formatar os números dos campos:
* CPF -  XXX.XXX.XXX-XX
* RG - XX.XXX.XXX
* CEP - XXXXX-XXX
* Telefone fixo - (XX) XXXX-XXXX
* Celular - (XX) X XXXX-XXXX

Link do framework JQuery:
* https://github.com/igorescobar/jQuery-Mask-Plugin

Link das linguagens HTML, CSS e JavaScript:
* https://www.w3schools.com/

O link do formulário está hospedado:
* https://formulariogama.netlify.app/
