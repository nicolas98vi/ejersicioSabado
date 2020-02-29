function mostrar()

//b)Para la gestión de un hotel,
//ingresar los siguientes datos validados de una reserva
//nombre del huésped
//cantidad de personas 
//cantidad de dia de estadia 
//forma de pago(efectivo , tarjeta o QR)

//informar el huésped que trajo más personas en una sola reserva.
//la cantidad de personas que se quedaron más días
//la forma de pago más utilizada.
//el promedio de cantidad de días por reserva





var maxCanPers;
var cantidadPersonas;
var maxCantPersonasHuesped;
var maxDias;
var maxDiasCantidad;
var cantDeReser;
var cantDeDias;
var promedio;
var formDePafoMasUsado;

var contEfectivo=0;
var contadTarg=0;
var contadorQR=0;
var contadorReserv=0;
var acumDeDias=0;
{
        var pregunta=prompt("si se va a registrar escriva si: ");
            while(pregunta=="si")
            {
                contadorReserv++
                var nombre=prompt("ingrese nombre: ");
                var huesped=parseInt(prompt("nombre del huesped: "));
                while(!isNaN(huesped))
		            {
			        huesped = prompt("error ingrese un numero valido: ");
			        huesped =parseInt(huesped);
		            }
                       var personas=parseInt(prompt("cuantas persnas: "));
                       while(!isNaN(personas))
                    {
                          personas =prompt("error ingrese un numero valido: ");
                          personas =parseInt(personas);
                    }
                            var dias=prompt("Cuantos dias se ospedaran en el hotel: ");
                            while(!isNaN(dias))
                            {
                             dias=prompt("error ingrese un numero valido: ");
                             dias=prompt(dias);
                            }
                            var formPago=prompt("va a pagar con efectivo o tarjeta o QR?:  ");
                             while(formPago!="efectivo"||formPago!="tarjeta"||formPago!="QR")
                             {
                                 formPago=prompt("error ingrese una forma de pago valida: ");

                             }
                             
                            if(contadorReserv==1||maxCanPers<maxCanPers)
                            {
                                maxCanPers=canttidadPersonas;
                                maxCantPersonasHuesped=nombre;
                            }
                            if(contadorReserv==1||maxDias<cantDeDias)
                            {
                                maxDias=cantDeDias;
                                maxCanPers=cantidadPersonas;
                            }
                            switch(formPago)
                            {
                                case"QR":
                                contadorQR=conadorQR+1
                                break;
                                case"efectivo":
                                contEfectivo=contEfectivo+1
                                break;
                                default:
                                contadTarg++;
                                break
                            }
            acumDeDias+acumDeDias+cantDeDias;

            }

 }
 promedio=acumDeDias/contadorReserv;
 if(contadorQR<contEfectivo&&contadorQR>contadTarg)
 {
    formDePafoMasUsado="tarjeta"; 
 }else
{
    formDePafoMasUsado="efectivo";
}
     
 

		 
       