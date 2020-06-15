
var db = openDatabase("myDB", "2.0", "Mybase", 2 * 1080);

function createDb(ckt){    
    
    //document.getElementById('btn-salvar').addEventListener('click', salvar);
    
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS circuit (id INTEGER PRIMARY KEY,proj TEXT, local TEXT, tipo_ckt TEXT, tens_va INTEGER, qt_ckt INTEGER, power_va INTEGER, carga_total INTEGER, corr_total INTEGER, comp_ckt INTEGER, secao_conduto INTEGER, qd_tens_perm INTEGER, n_polos INTEGER, corr_nom INTEGER, dj TEXT)");
    });

} 


var botaoAdicionar = document.querySelector("#adicionar");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    //Ler formulário
    var ckt = obtemCKTFormulario(form);

    //addData(ckt)

    form.reset();

});

function obtemCKTFormulario(form) {

    var ckt = {
        projeto: form.id_r_project.value, //PROJETO
        local: form.id_r_local.value, //LOCAL
        tipoCKT: form.id_r_type_circuit.value, //TIPO
        tensVa: form.id_r_tension.value, //TENSAO_VA
        qtCKT: form.r_numbers_points.value, //QUANT
        powerVA: form.id_r_power_va.value, //POTENCIA_TOTAL
        compCKT: form.id_r_circuit_length.value, //COMP_CKT
        qdTensPerm: form.id_r_volt_drop_allow.value, //QUEDA_TENSAO
        nPolos: form.id_r_numero_polos.value, //N_DE_POLOS
    }
    console.log(ckt)
    return ckt;
}

function addData(ckt, calc){

    //createDb(ckt)

    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO myTable (proj, local, tipo_ckt, tens_va, qt_ckt, power_va, carga_total, corr_total, comp_ckt, secao_conduto, qd_tens_perm, n_polos, corr_nom, dj) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ckt.projeto, ckt.local, ckt.tipo_ckt, ckt.tensVa, ckt.qtCKT, ckt.powerVA, calc.carga_total, calc.corr_total, ckt.compCKT, calc.secao_conduto, ckt.qdTensPerm, ckt.nPolos, calc.corr_nom, calc.dj]);

    });
}





function salvar(event){
    
    //var id = document.getElementById('field-id').value;
    var tensaVa = document.getElementById('id_r_tension').value;

    console.log(tension[tensaVa])
    
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