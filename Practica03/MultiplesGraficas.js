
var tickers = ["BTC/USD","TSLA","AMZN","AAPL","ARKK"];
var ejeX = [,,,,];
var ejeY = [,,,,];
var results =[,,,,];
const escalaTemporal = "1day";

const form1=document.getElementById("form0");
const form2=document.getElementById("form1");
const form3=document.getElementById("form2");
const form4=document.getElementById("form3");
const form5=document.getElementById("form4");










function getCheckedValue( groupName ) {
  var radios = document.getElementsByName( groupName );
  for( i = 0; i < radios.length; i++ ) {
      if( radios[i].checked ) {
          return radios[i].value;
      }
  }
  return null;
}


function sacarEjes(pos){
  var ejeXAux =[];
  var ejeYAux =[];
  ejeX.length=0;
  ejeY.length=0;
  ejeXAux.length=0;
  ejeYAux.length=0;
  results[pos].values.forEach(valor=>{
    ejeXAux.push(valor.datetime);
    ejeYAux.push(valor.close)
  })
  ejeXAux.reverse();
  ejeYAux.reverse();
  ejeX[pos]=ejeXAux;
  ejeY[pos]=ejeYAux;
  console.log(ejeX);
  console.log(ejeY);
}


function pintar(pos){
  const ctx = document.getElementById("myDiv"+(parseInt(pos)+1)).getContext('2d');
  //Chart.defaults.global.defaultFontColor='white';
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ejeX[pos],
        datasets: [{
            label: 'Precio de '+tickers[pos]+"\t tipo:"+results[pos].meta.type,
            data: ejeY[pos],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 2,
            pointBorderColor:  'rgba(255, 99, 132, 1)',
            pointHoverRadius:7,
            pointHoverBorderColor: 'rgb(255,0,0,1)'
        }]
    },
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    fontColor: 'white'
                }
            }],
            xAxes:[{
                ticks:{
                    fontColor: 'white'
                }
            }]
        }
    }
});
  
}

function cambiarEscala(nuevaEscala){
  var peticionesMultiples="";
  //escalaTemporal=nuevaEscala;
  for(i=0;i<tickers.length;i++){
    if(i==0){
      peticionesMultiples=tickers[i];
    }else{
      peticionesMultiples=peticionesMultiples+","+tickers[i];
    }
  }
  fetch('https://api.twelvedata.com/time_series?symbol='+peticionesMultiples +'&interval='+ getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    console.log(peticionesMultiples);
    return res.json()
  })
  .then(r => {
    guardarResultados(r);
    //console.log(r);
    console.log(results[0]);
    for(i=0;i<results.length;i++){
      sacarEjes(i);
      pintar(i);
    };
    
  })
}
function guardarResultados(r){
  tickers.forEach(valorTicker=>{
    
    results[tickers.indexOf(valorTicker)]=r[valorTicker];
  });
  console.log(results);
}


form1.addEventListener("submit", function(e){
  e.preventDefault();
  actualizarTicker(0);
  fetch('https://api.twelvedata.com/time_series?symbol='+ tickers[0]+'&interval='+getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    return res.json()
  })
  .then(r => {
    results[0]=r;
    console.log(r);
    sacarEjes(0);
    pintar(0);
  })
  .catch(e => {
    console.error("Error " + e)
  })
  
  //console.log("La contraseña es " + Usuario.nombre.value)
  return false;
});
form2.addEventListener("submit", function(e){
  e.preventDefault();
  actualizarTicker(1);
  fetch('https://api.twelvedata.com/time_series?symbol='+ tickers[1]+'&interval='+getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    return res.json()
  })
  .then(r => {
    results[1]=r;
    console.log(r);
    sacarEjes(1);
    pintar(1);
  })
  .catch(e => {
    console.error("Error " + e)
  })
  
  //console.log("La contraseña es " + Usuario.nombre.value)
  return false;
});
form3.addEventListener("submit", function(e){
  e.preventDefault();
  actualizarTicker(2);
  fetch('https://api.twelvedata.com/time_series?symbol='+ tickers[2]+'&interval='+getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    return res.json()
  })
  .then(r => {
    results[2]=r;
    console.log(r);
    sacarEjes(2);
    pintar(2);
  })
  .catch(e => {
    console.error("Error " + e)
  })
  
  //console.log("La contraseña es " + Usuario.nombre.value)
  return false;
});
form4.addEventListener("submit", function(e){
  e.preventDefault();
  actualizarTicker(3);
  fetch('https://api.twelvedata.com/time_series?symbol='+ tickers[3]+'&interval='+getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    return res.json()
  })
  .then(r => {
    results[3]=r;
    console.log(r);
    sacarEjes(3);
    pintar(3);
  })
  .catch(e => {
    console.error("Error " + e)
  })
  
  //console.log("La contraseña es " + Usuario.nombre.value)
  return false;
});
form5.addEventListener("submit", function(e){
  e.preventDefault();
  actualizarTicker(4);
  fetch('https://api.twelvedata.com/time_series?symbol='+ tickers[4]+'&interval='+getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    return res.json()
  })
  .then(r => {
    results[4]=r;
    console.log(r);
    sacarEjes(4);
    pintar(4);
  })
  .catch(e => {
    console.error("Error " + e)
  })
  
  //console.log("La contraseña es " + Usuario.nombre.value)
  return false;
});


function buscarGrafica(pos){
  console.log(pos);
  fetch('https://api.twelvedata.com/time_series?symbol='+ actualizarTicker(pos)+'&interval='+ getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here");
    console.log(res.json());
    return res.json()
    
  })
  .then(r => {
    results[pos]= r;
    console.log(r);
    sacarEjes(pos);
    pintar(pos);
  }).catch(e => {
    console.error("Error " + e)
  })
}
function encontrarTickerCambiado(){
  var tickersAux = document.getElementsByName("tickerBusqueda");

}

function actualizarTicker(pos){
  
  var tickersAux = document.getElementsByName("tickerBusqueda");
  tickers[pos]= tickersAux[pos].value;
  console.log(tickersAux[pos]);
  return tickersAux[pos].value;
}


window.onload = function(){
  const link = window.location.href;
  var peticionesMultiples="";
  //escalaTemporal=nuevaEscala;
  for(i=0;i<tickers.length;i++){
    if(i==0){
      peticionesMultiples=tickers[i];
    }else{
      peticionesMultiples=peticionesMultiples+","+tickers[i];
    }
  }
  fetch('https://api.twelvedata.com/time_series?symbol='+peticionesMultiples +'&interval='+ getCheckedValue("inlineRadioOptions")+'&apikey=a2662782ffe54111b35a2e0c9569dbdf')
  .then(res => {
    console.log("Response here")
    console.log(peticionesMultiples);
    return res.json()
  })
  .then(r => {
    guardarResultados(r);
    //console.log(r);
    console.log(results[0]);
    for(i=0;i<results.length;i++){
      sacarEjes(i);
      pintar(i);
    };
    
  })
  
  var variables = parseURLParams(link);
  if(variables==0){
    document.getElementById('granContenedor').style.display = 'none'; //hide
    document.getElementById('granContenedor').style.visibility = 'hidden';      // hide
    alert("Te estás queriendo colar!");
  }else{
    document.getElementById("Etiqueta_con_Nombre").innerHTML = "Dashboard Financiero de "+variables.nombre[0];

  }
  
}

function parseURLParams(url) {
  var queryStart = url.indexOf("?") + 1,
      queryEnd   = url.indexOf("#") + 1 || url.length + 1,
      query = url.slice(queryStart, queryEnd - 1),
      pairs = query.replace(/\+/g, " ").split("&"),
      parms = {}, i, n, v, nv;

  if (query === url || query === "") return 0;

  for (i = 0; i < pairs.length; i++) {
      nv = pairs[i].split("=", 2);
      n = decodeURIComponent(nv[0]);
      v = decodeURIComponent(nv[1]);

      if (!parms.hasOwnProperty(n)) parms[n] = [];
      parms[n].push(nv.length === 2 ? v : null);
  }
  return parms;
}


function cambiarADashboard(){
  const link = window.location.href;
  console.log(link);
  var variables = parseURLParams(link);
  try{
    console.log(variables.nombre[0]);
    window.location.href="Dashboard.html?name="+variables.nombre[0];
  }catch(error){
    window.location.href="Dashboard.html";
  }
  
}