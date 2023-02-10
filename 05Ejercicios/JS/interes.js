//la funcion de validacion

function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes(){
    var valor = document.formulario.cantidad.value;
    var resul = parseInt(valor);
    var interes = resul*0.02;
    var total = interes * resul;

    document.formulario.sueldoI.value= "$" + total;
}

function borrardatos(){
    document.formulario.saldo.value="";
    document.formulario.venta.value="";
    document.formulario.totI.value="";
    document.formulario.cantidad.value= "";
    document.formulario.sueldoI.value= "";

}

function comision(){
    var saldo1 = document.formulario.saldo.value;
    var ventas1=document.formulario.venta.value;
    var sueldoBase = parseInt(saldo1);
    var ventas = parseInt(ventas1);
    //inician las operaciones para las comisiones
    var porcentaje = ventas/10;
    var comision=sueldoBase*porcentaje;
    var total1 = sueldoBase+comision;

    document.formulario.totI.value= "$" + total1;

}


