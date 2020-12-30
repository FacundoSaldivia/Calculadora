function getHistory() {
   return document.getElementById('history-value').innerText;
}
function printHistory(num) {
   document.getElementById('history-value').innerText = num;  
}

function getOutput() {
   return document.getElementById('output-value').innerText;
}
function printOutput(num) {
   if (num == ''){
      document.getElementById('output-value').innerText = num;
   } else {
      document.getElementById('output-value').innerText = getFormatedNumber(num);  
   }
}
// esta funcion hace que el numero que devuelva sea con como (2mil seria 2.000 en vez de 2000)
function getFormatedNumber(num) {
   if (num == '-'){
      return '';
   }
   var n = Number(num); //permite trabajar con los numeros de una mejor manera por que lo que entiendo (no permite ingresar letras)
   var value = n.toLocaleString('de-DE')// regresa una representancion locaclizada del texto(numero aca), aca al ser EN seria (ingles ? usa ? nose), cambie a de-DE asi representa el mil con un punto
   return value
}
function reverseNumberFormat(num) {
   return Number(num.replace('.',''))
}

var operator = document.getElementsByClassName('operator');
for (var i = 0; i < operator.length; i++){
   operator[i].addEventListener('click', function(){
      if (this.id == 'clear'){
         printOutput('');
         printHistory('');
      } else if (this.id == 'backspace'){
         var output = reverseNumberFormat(getOutput()).toString();
         if (output){
            output = output.substr(0,output.length-1);
            printOutput(output);
         }
      } else {
         var output = getOutput();
         var history = getHistory();
         if (output == '' && history != ''){
            if(isNaN(history[history.length-1])){
               history = history.substr(0,history.length-1);
            } //is Not A Number 
         }
         if (output != '' || history != ''){
            output = output == '' ? 
            output:reverseNumberFormat(output);
            history += output;
            if (this.id == '='){
               var result = eval(history);
               printOutput(result);
               printHistory('');
            } else {
               history += this.id;
               printHistory(history);
               printOutput('');
            }
         }
      }

   })
}

var number = document.getElementsByClassName('number');
for (var i = 0; i < number.length; i++){
   number[i].addEventListener('click', function(){
      var output = reverseNumberFormat(getOutput());
      if(output != NaN){ // si es un numero
         output += this.id;
         printOutput(output)
      }
   })
}