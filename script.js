function getDay() {
    var dateInput = document.getElementById("date");
    var dateString = dateInput.value;
  
    // Basic validation for YYYY-MM-DD format
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
        alert("Please enter the date in YYYY-MM-DD format.");
        return;
    }
  
    // Parse the date string
    var year = parseInt(dateString.slice(0, 4));
    var month = parseInt(dateString.slice(5, 7));
    var day = parseInt(dateString.slice(8));
  
    var somamesx = [9, 0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    var somames1 = 0;
  
    var anonumerico = year;
    var mesnumerico = month;
    var dianumerico = day;
  
    somames1 = somamesx[mesnumerico];
    somadia1 = dianumerico;
  
    var ano1582 = 1;
    var diasemana = 5;
    var bissexto1 = "N";
    var bissexto1externo = "N";
  
    var resto4 = 0;
    var resto100 = 0;
    var resto400 = 0;
  
    // INICIO DA ROTINA ANTIGA
    const diasDaSemana1 = [
        'O dia da semana é sabado ',
        'O dia da semana é Domingo',
        'O dia da semana é Segunda-feira',
        'O dia da semana é Terça-feira',
        'O dia da semana é Quarta-feira',
        'O dia da semana é Quinta-feira',
        'O dia da semana é Sexta-feira',
        'O dia da semana é Sábado'
    ];
  
    var anox = (anonumerico);
    var bissextox = ~~(anonumerico / 4);
    var ano100x = ~~(anonumerico / 100);
    var ano400x = ~~(anonumerico / 400);
    var diasemanax = (anox + bissextox - ano100x + ano400x);
  
    if (anonumerico % 4 === 0 && (anonumerico % 100 !== 0 || anonumerico % 400 === 0)) {
        alert("anomumerico = " + anonumerico + "este ano é bissexto");
        if (mesnumerico < 3) {
            diasemanax = diasemanax - 1;
            alert("subtraiu  1 mes < 3");
        }
    }
  
    diasemanax = diasemanax + somamesx[mesnumerico];
    diasemanax = diasemanax + somadia1;
  
    diasemanax1 = diasemanax % 7;
  
    var diasemana
    day = diasDaSemana1[diasemanax1];
    document.getElementById("day1").innerHTML = day;
  }