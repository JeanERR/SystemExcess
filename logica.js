function sudeti() {
 
    var numero_original = document.getElementById("pirmas").value;
    var sign;   
    var exp;

    if (numero_original>0) {
        
        sign = 0;
        binario = Number(numero_original).toString(2);

    }else{

        sign =1;
        numero_original = numero_original*-1;
        binario = Number(numero_original).toString(2);
  
      }


    

     arr = binario.split(".");
     parte_entera = arr[0];
     parte_decimal = arr[1];
 
     exponente = parte_entera.toString().length;

      
     normalizacion= binario * Math.pow(10,-(exponente-1));
    
      arr2 = normalizacion.toString().split(".");
      parte_entera1 = arr2[0];
      parte_decimal1 = arr2[1];

      mantisa = parte_decimal1;

    nuevo_binario = parseFloat(binario).toFixed(8);


     redondeo = normalizacion.toFixed();
     
     error = ((exponente-1) + 127).toString(2);
     


     function pad(mantisa, length, padding) { 

        var str = mantisa + "";
        return (length <= str.length) ? str : pad(str+padding, length, padding);
        
      }


     var resultado = pad(mantisa,23,0);


     
     document.getElementById("viso").innerHTML = sign;

     document.getElementById("viso2").innerHTML = binario;
   
    
     document.getElementById("viso3").innerHTML = normalizacion  + " x "+"2 ^ " + (exponente-1);

     
     document.getElementById("viso4").innerHTML = (exponente-1) + " + " + 127 + " = " + (exponente+126) + " = " + error ;

     
     document.getElementById("viso5").innerHTML = mantisa;
   
     document.getElementById("viso6").innerHTML = sign + "-" + error + " - "+ resultado ;
   
}

function exceso1023() {
 
    var numero_original = document.getElementById("pirmas").value;
    var sign;   
    var exp;

    if (numero_original>0) {
        
        sign = 0;
        binario = Number(numero_original).toString(2);

    }else{

        sign =1;
        numero_original = numero_original*-1;
        binario = Number(numero_original).toString(2);
  
      }


    

     arr = binario.split(".");
     parte_entera = arr[0];
     parte_decimal = arr[1];
 
     exponente = parte_entera.toString().length;

      
     normalizacion= binario * Math.pow(10,-(exponente-1));
    
      arr2 = normalizacion.toString().split(".");
      parte_entera1 = arr2[0];
      parte_decimal1 = arr2[1];

      mantisa = parte_decimal1;

    nuevo_binario = parseFloat(binario).toFixed(8);


     redondeo = normalizacion.toFixed();
     
     error = ((exponente-1) + 1023).toString(2);
     


     function pad(mantisa, length, padding) { 

        var str = mantisa + "";
        return (length <= str.length) ? str : pad(str+padding, length, padding);
        
      }


     var resultado = pad(mantisa,52,0);


     
     document.getElementById("viso").innerHTML = sign;

     document.getElementById("viso2").innerHTML = binario;
   
    
     document.getElementById("viso3").innerHTML = normalizacion  + " x "+"2 ^ " + (exponente-1);

     
     document.getElementById("viso4").innerHTML = (exponente-1) + " + " + 1023 + " = " + (exponente+1022) + " = " + error ;

     
     document.getElementById("viso5").innerHTML = mantisa;
   
     document.getElementById("viso6").innerHTML = sign + " - " + error + " - "+ resultado ;
   
}