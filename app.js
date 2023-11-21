function validaFormulario(){
    const nome = document.getElementById ("nome").value;
    const email = document.querySelector ("#email").value;
    const senha = document.getElementById ("senha").value;
    
    /*
    validação dos campos preenchidos
    */

    if(nome == "" || email == "" || senha == ""){
        alert("Por favor, preencha os campos")
    }
    /*
    //validação da senha
    if(senha > 8){
        alert("Limite de carácteres excedido!")
    }
    */
    console.log(senha)
}