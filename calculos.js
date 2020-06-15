
function calculos(ckt){

    let list_calc = {
        carga_total: (ckt.qtCKT * ckt.powerVA),
        corr_total: (carga_total / ckt.tensVa),
        secao_conduto: '',
        corr_nom : '',
        dj : ''
    }

    return list_calc;
}




function calc_cable(ckt){

    calc = calculos(ckt)

}
