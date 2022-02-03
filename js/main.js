let n1,n2,n3,n4,n5;
let summe = 0;
let anzahlNoten = 0;
let ergebnis;

function tfAuslesen () {
    n1 = parseInt(document.getElementById("tfnote1").value);
    n2 = parseInt(document.getElementById("tfnote2").value);
    n3 = parseInt(document.getElementById("tfnote3").value);
    n4 = parseInt(document.getElementById("tfnote4").value);
    n5 = parseInt(document.getElementById("tfnote5").value);

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5);

    punktePruefen(n1)
    punktePruefen(n2)
    punktePruefen(n3)
    punktePruefen(n4)
    punktePruefen(n5)

    ergebnis = summe / anzahlNoten;

    document.getElementById("ausgabe").innerHTML = ergebnis

}

function punktePruefen(punkte) {
    if(isNaN(punkte))
    {
        console.log(punkte + " ist keine Zahl!")
    }else{
       summe = summe + punkte;
       anzahlNoten = anzahlNoten + 1;
    }
}

//lul