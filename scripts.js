//https://respostas.guj.com.br/31984-como-criar-um-header-e-um-footer-fixos-para-todas-as-paginas


$(document).ready(function(){

    var baseUrl    = 'https://8000-a4494a87-5e96-4212-9efb-04d304f99a58.ws-us02.gitpod.io/';
    var deleteBtn  = $('.delete-btn');
    var searchBtn  = $('#search-btn');
    var searchForm = $('#search-form');
    var filtery    = $('#filtery');
    


    $(deleteBtn).on('click', function(e){
        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer realmente deletar esta tarefa?');

        if(result){
            window.location.href = delLink;
        }
    });  

    $(searchBtn).on('click', function(){
        searchForm.submit();
    })

    $(filtery).change(function() {
        var filtery = $(this).val();
        window.location.href = baseUrl + '?filtery=' + filtery;
        console.log(filtery);

    });
});


function lerNomeProj(){
    let url = window.location.href
    let _id = url.split("?")[1]; // id=10&name=gustavo

    for(i=0;i<_id.length;i++){
        console.log('dentro da function',_id[0])
    }
    
    return _id

}

var nome_proj = lerNomeProj()
console.log('nome: ', nome_proj)

var cidades = [nome_proj];



cidades.forEach(function(item){
    $('select').append('<option>' + item + '</option>');
});
