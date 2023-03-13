(function(){

    window.addEventListener('load', init);
    function init(){}
    'use strict';
    var $ul = document.querySelector('ul');
    var $lis = document.querySelectorAll('li');

    var $name = document.querySelector('#aparelho')
    var $submit = document.querySelector('#buttao')
    var $watts = document.querySelector('#watts')
    var $horas = document.querySelector('#horas')
    var $dias = document.querySelector('#dias')
    var $listar = document.querySelector('#listarPreco')

    var total = 0;

    var Lista = document.querySelector("#lista");
    const novoItem = document.createElement("li");

    $submit.addEventListener('click', function(e) {
        e.preventDefault();
        if ($watts.value > 0 && $horas.value > 0 && $dias.value > 0) {
            var $total = (($watts.value) * ($horas.value) * ($dias.value)) / 1000;
            var novoItem = document.createElement("span");
            novoItem.textContent = "Consumo do item " + $name.value + " equivale a: " + $total + " RS";
            var novoLi = document.createElement("li");
            novoLi.appendChild(novoItem);
            Lista.appendChild(novoLi);
            $watts.value = '';
            $horas.value = '';
            $dias.value = '';
            $name.value = '';

            total += $total;
           
            debugger
        } else {
            alert("Existem valores não preenchidos")
            return
        }
    });

    
    $listar.addEventListener('click', function(e){
            if(total === 0 ) {
            alert("Sem aparelhos cadastrados"); 
            return;
        } else{ debugger; alert("Soma dos valores dos aparelhos: " + total) }
    })



})()