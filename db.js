
var db = openDatabase("myDB", "2.0", "Mybase", 2 * 1080);

function createDb(){    
    
    //document.getElementById('btn-salvar').addEventListener('click', salvar);
    
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS circuit (id INTEGER PRIMARY KEY,LOCAL TEXT, TIPO TEXT, TENSAO_VA INTEGER, QUANT INTEGER, POTENCIA_VA INTEGER, TOTAL_VA INTEGER, CORRENTE_VA, INTEGER, COMP_CKT INTEGER, SECAO_CONDUTOR INTEGER, QUEDA_TENSAO INTEGER, PERMITIDA INTEGER, N_DE_POLOS INETGER, CORRENTE_NOMINAL INTEGER, DJ_Usual TEXT");
    });

} 


var botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Ler formulário
    console.log(form)
    console.log('>>>>>',form.id_r_tension.value)
    var ckt = obtemCKTFormulario(form);

    form.reset();

});

function obtemCKTFormulario(form) {

    var ckt = {
        tensaoVa: form.id_r_tension.value,

    }
    return ckt;
}


/*
function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    //Adicioanr tabela de paciente
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

} 




function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-peso");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

 function validaPaciente(paciente){
    var erros = [];
    if(!validaPeso(paciente.peso)) erros.push("Peso inváido!");
    if(!validaAltura(paciente.peso)) erros.push("Altura inváido!");
    return erros;
} 

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.tensaoVa.length == 0){
        erros.push("O campo Tensao não pode ser em branco");
    }

    return erros;
}




*/












function salvar(event){
    
    //var id = document.getElementById('field-id').value;
    var tensaVa = document.getElementById('id_r_tension').value;

    console.log(tension[tensaVa])
    
}











/*     db.transaction(function(tx) {
        
        if(id){
            
            tx.executeSql('UPDATE myTable SET nome=?, idade=?, cep=?, cidade=?, estado=?, bairro=?, rua=?, numero=?, email=? senha=? WHERE id=?', [nome,idade,cep,cidade,estado,bairro,rua,numero,mail,pass,id],null);
        }else{
            //window.alert("Aqui!!!")
            tx.executeSql('INSERT INTO myTable (nome,idade,cep,cidade,estado,bairro,rua,numero,email,senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome,idade,cep,cidade,estado,bairro,rua,numero,mail,pass]);
        }
    });
 */
    //mostrar();




//tx.executeSql("DROP TABLE myTable" );
//tx.executeSql('DROP DATABASE myDB');