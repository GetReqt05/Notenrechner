let n1,n2,n3,n4,n5;
let anzahlNoten = 0;
let ergebnis;
let summe = 0
/*

 */ // kommentar über mehrere Zeilen
function tfAuslesen () {
    n1 = parseInt(document.getElementById("tfNote1").value); // Auslesen Notenfeld 1 und Umwandlung in Zahl
    n2 = parseInt(document.getElementById("tfNote2").value); // Auslesen Notenfeld 2 und Umwandlung in Zahl
    n3 = parseInt(document.getElementById("tfNote3").value); // Auslesen Notenfeld 3 und Umwandlung in Zahl
    n4 = parseInt(document.getElementById("tfNote4").value); // Auslesen Notenfeld 4 und Umwandlung in Zahl
    n5 = parseInt(document.getElementById("tfNote5").value); // Auslesen Notenfeld 5 und Umwandlung in Zahl

    console.log(n1 + ";" + n2 + "i" + n3 + "i" + n4 + "i" + n5); // Ausgabe  der Nummern in der Konsole hintereinander

    punktePruefen(n1);
    punktePruefen(n2);
    punktePruefen(n3);
    punktePruefen(n4);
    punktePruefen(n5);

    ergebnis = summe / anzahlNoten; // Ergebnis wird zusammengerechnet aus Summe geteilt durch anzahlNoten

    document.getElementById("ausgabe").innerHTML = ergebnis; // das element "ausgabe" wird durch die Zahl aus ergebnis ersetzt

    if (ergebnis <= 5 )
    {
        document.getElementById("ausgabe").style.color = "crimson" //Wenn Ergebnis kleiner als 5, wird rot eingefäbt
    }

    if (ergebnis < 11 && ergebnis > 5)
    {
        document.getElementById("ausgabe").style.color = "darkgoldenrod" // wenn Ergebnis kleiner als 11, größer als 5, wird gelb gefärbt
    }

    if (ergebnis >= 11)
    {
        document.getElementById("ausgabe").style.color = "darkgreen" // wenn Ergebnis größer als 11, grün gefärbt
    }
}

function punktePruefen(punkte) {
    if (isNaN(punkte))                          // Überprüfung, ob "punkte" eine Zahl ist oder nur ein Text
    {
        console.log(punkte + "ist keine Zahl!") // Angabe, dass punkte keine Zahl
    }else if (punkte > 15 || punkte < 0)        // Andererseits, wenn Punkte mehr als 15, weniger als 0
    {
        console.log(punkte + "nicht zulässig")  // Angabe in der Konsole, dass Zahl nicht zulässig ist
    } else {                                    // wenn beide nicht zutreffen,
        summe = summe + punkte                  // dann summe gesamt = summe + die Zahl, die dazugerechnet wird
        anzahlNoten = anzahlNoten + 1;          // dann Anzahl Noten = Anzahl der Noten + 1
    }

}
