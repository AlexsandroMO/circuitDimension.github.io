
var db = openDatabase("myDB", "2.0", "Mybase", 2 * 1080);

function createDb(ckt){    
    
    //document.getElementById('btn-salvar').addEventListener('click', salvar);
    
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS circuit (id INTEGER PRIMARY KEY,PROJETO TEXT, LOCAL TEXT, TIPO TEXT, TENSAO_VA INTEGER, QUANT INTEGER, POTENCIA_VA INTEGER, TOTAL_VA INTEGER, CORRENTE_VA, INTEGER, COMP_CKT INTEGER, SECAO_CONDUTOR INTEGER, QUEDA_TENSAO INTEGER, PERMITIDA INTEGER, N_DE_POLOS INETGER, CORRENTE_NOMINAL INTEGER, DJ_Usual TEXT");
    });

} 


var botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    //Ler formulário
    var ckt = obtemCKTFormulario(form);

    addData(ckt)

    form.reset();

});

function obtemCKTFormulario(form) {

    var ckt = {
        project: form.id_r_project.value, //PROJETO
        local: form.id_r_local.value, //LOCAL
        typeCKT: form.id_r_type_circuit.value, //TIPO
        tensaoVa: form.id_r_tension.value, //TENSAO_VA
        numberPoints: form.r_numbers_points.value, //QUANT
        powerVA: form.id_r_power_va.value, //POTENCIA_VA
        circuitLength: form.id_r_circuit_length.value, //COMP_CKT
        voltdropAllow: form.id_r_volt_drop_allow.value, //QUEDA_TENSAO
        numberPolos: form.id_r_numero_polos.value, //N_DE_POLOS
    }
    console.log(ckt)
    return ckt;
}

function addData(ckt){

    createDb(ckt)
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO myTable (PROJETO, LOCAL, TIPO, TENSAO_VA, QUANT, POTENCIA_VA, TOTAL_VA, CORRENTE_VA, COMP_CKT, SECAO_CONDUTOR, QUEDA_TENSAO, PERMITIDA, N_DE_POLOS, CORRENTE_NOMINAL, DJ_Usual) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ckt.project,ckt.local,ckt.typeCKT,ckt.tensaoVa,ckt.numberPoints,ckt.powerVA,'TVA','CVA',ckt.circuitLength,'SECAO_CONDUTOR', 'QUEDA_TENSAO', 'PERMITIDA',ckt.voltdropAllow,ckt.numberPolos,'CORRENTE_NOMINAL', 'DJ']);

    });
}

function calculos(){
    CORRENTE_NOMINAL
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