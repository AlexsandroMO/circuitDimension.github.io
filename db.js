
var db = openDatabase('myDB', '1.0', 'Mybase', 1024);

function createDb(){    
    
    //document.getElementById('btn-salvar').addEventListener('click', salvar);
    
    db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS circuit (id INTEGER PRIMARY KEY, projeto TEXT, local TEXT, tipo_ckt TEXT, tens_va INTEGER, qt_ckt INTEGER, power_va INTEGER, carga_total INTEGER, corr_total INTEGER, comp_ckt INTEGER, secao_condutor INTEGER, qd_tens_perm INTEGER, n_polos INTEGER, arrang_cable TEXT, corr_nom INTEGER, dj TEXT)");
    });
 
} 


/* var botaoAdicionar = document.querySelector("#adicionar");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); */

function addCircuit(){
    var form = document.querySelector("#form-adiciona");
    //Ler formulário
    var ckt = obtemCKTFormulario(form);

    //searchCable(ckt)
    calc = calculos(ckt)

    createDb()
    addData(ckt, calc)

    form.reset();

    // Redireciona o usuário para a página da DevMedia após cinco segundos
   /*  setTimeout(function() {
        window.location.href = "http://www.devmedia.com.br";
    }, 5000); */
    //window.location.href = "home.html";

//});

}

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
        arrangCable: form.id_r_arrang_cable.value, //N_DE_POLOS
    }
    console.log(ckt)
    return ckt;
}

function addData(ckt, calc){

    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO circuit (projeto, local, tipo_ckt, tens_va, qt_ckt, power_va, carga_total, corr_total, comp_ckt, secao_condutor, qd_tens_perm, n_polos, arrang_cable, corr_nom, dj) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [ckt.projeto, ckt.local, ckt.tipoCKT, ckt.tensVa, ckt.qtCKT, ckt.powerVA, calc.cargaTotal, calc.corrTotal, ckt.compCKT, calc.secaoCondutor, ckt.qdTensPerm, ckt.nPolos, ckt.arrangCable, calc.corrNom, calc.dj]);

    });

}


function readDB(){

    var tabela = document.createElement('table')
    //var titulo = document.getElementById('alinha-h3')
    var cabecalho = document.createElement('thead')
  
    var dados = '<th id="th-color"><a id="add-link" href="#"><i class="fas fa-plus"></i></a></th>\
                <th scope="col">LOCAL</th>\
                <th scope="col">TIPO</th>\
                <th scope="col">TENSÃO (VA)</th>\
                <th scope="col">QUANT.</th>\
                <th scope="col">POTÊNCIA (VA)</th>\
                <th scope="col">TOTAL (VA)</th>\
                <th scope="col">COMP. CKT</th>\
                <th scope="col">SEÇÃO CONDUTOR</th>\
                <th scope="col">QUEDA TENSÃO PERMITIDA(%)</th>\
                <th scope="col">Nº DE POLOS</th>\
                <th scope="col">ORGANIZAÇÃO DE CABOS</th>\
                <th scope="col">CORRENTE NOMINAL</th>\
                <th scope="col">DJ USUAL</th>\
                <th scope="col"></th>'
  
    //titulo.innerHTML = 'Estoque de Produtos'
  
    cabecalho.innerHTML = dados
    cabecalho.classList.add('thead-dark')
    //tabela.classList.add('table-round-corner')
    tabela.classList.add('table')
  
    tabela.appendChild(cabecalho)
    tabela.appendChild(montaBody())
  
    document.getElementById('ajusta-tabela').appendChild(tabela)
  
  }
  
  function montaBody(){
    console.log('>>>>>>')
    var corpo = document.createElement('tbody')
  
    db.transaction(function (tx){
      tx.executeSql('SELECT * FROM circuit', [], function (tx, resultado){
        var rows = resultado.rows
        var tr = ''

        console.log(rows)

        for (let i=0;i<rows.length;i++){
          tr += '<tr>';
            tr += '<td onclick="chamaId('+ rows[i].id  +')">' + rows[i].id + '</td>';
            tr += '<td>' + rows[i].local + ' </td>';
            tr += '<td>' + rows[i].tipo_ckt + ' </td>';
            tr += '<td>' + rows[i].tens_va + ' </td>';
            tr += '<td>' + rows[i].qt_ckt + ' </td>';
            tr += '<td>' + rows[i].power_va + ' </td>';
            tr += '<td>' + rows[i].carga_total + ' </td>';
            tr += '<td>' + rows[i].corr_total + ' </td>';
            tr += '<td>' + rows[i].comp_ckt + ' </td>';
            tr += '<td>' + rows[i].secao_condutor + ' </td>';
            tr += '<td>' + rows[i].qd_tens_perm, + ' </td>';
            tr += '<td>' + rows[i].n_polos, + ' </td>';
            tr += '<td>' + rows[i].arrang_cable, + ' </td>';
            tr += '<td>' + rows[i].corr_nom, + ' </td>';
            tr += '<td>' + rows[i].dj, + ' </td>';


            tr += '</tr>'; 
        }
        corpo.innerHTML = tr
  
    }, null);
  
    });
  
    return corpo;
  
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