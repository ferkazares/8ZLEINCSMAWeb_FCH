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
    document.formulario.saldo.value ="";
    document.formulario.venta.value ="";
    document.formulario.totI.value ="";
    document.formulario.cantidad.value = "";
    document.formulario.sueldoI.value = "";
    document.formulario.totC.value = "";
    document.formulario.compra.value = "";
    document.formulario.calif1.value ="";
    document.formulario.calif2.value ="";
    document.formulario.calif3.value ="";
    document.formulario.Efinal.value ="";
    document.formulario.Tfinal.value =""
    document.formulario.Califs.value =""
}
//funcion para problema 2
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
//funcion para problema 3
function descCompra(){
    var compraInt = parseInt(document.formulario.compra.value);
    var descuento = compraInt*0.15;
    var totalDesc = compraInt-descuento;
    document.formulario.totC.value ="$"+totalDesc;
}

function califFinal(){
    var calif1Int= parseFloat(document.formulario.calif1.value);
    var calif2Int= parseFloat(document.formulario.calif2.value);
    var calif3Int= parseFloat(document.formulario.calif3.value);
    var EFinalInt= parseFloat(document.formulario.Efinal.value);
    var TFinalInt= parseFloat(document.formulario.Tfinal.value);
    var porceCalif=((calif1Int+calif2Int+calif3Int))/3*0.55;    
    var porceEFinal = EFinalInt*0.30;
    var porceTFinal = TFinalInt*0.15;
    var califTotal = porceCalif + porceEFinal + porceTFinal; 

    document.formulario.Califs.value =califTotal;
}

