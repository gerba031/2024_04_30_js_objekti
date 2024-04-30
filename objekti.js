/* 
1. Kreiraj objekt koji reprezentira neki specifičan auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoči i...) a jedna je također objekt. 
Probajte referecirati druge vrijednosti objekta u funkcijama
Svaka funkcija mora priamti argumente i vraćati neku vrijednost.

2. Pozovite funkciju svog objekta sa argumentima i ispišite rezultat
3. Sa petljkom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednost u konzoli
4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvoj objekta
5. Pretvori svoj objekt u JSON string.*/

var auto = {
    boja: "crna",
    marka: { tip: "BMW", model: "ff30" },
    cijena: 22000,
    brzina: 10,
    maxBrzina: 220,
    registrian: true,
    ubrzaj: function (vrijeme) {
        //this.brzina = vrijeme*5
        let tmpVrijeme = 1;
        while (this.brzina < this.maxBrzina) {
            this.brzina = this.brzina + 5;
            if (tmpVrijeme == vrijeme) {
                break;
            }
            tmpVrijeme++;
        }
        return this.brzina;
    },
    zakoci: function (vrijeme) {
        while (this.brzina > 0) {
            //smanjujemo brzinu
            this.brzina = this.brzina - 20;
            vrijeme--;
            if (vrijeme == 0 || this.brzina == 0) {
                break;
            }
        }
        return this.brzina;
    },
    promijeniBoju: function (novaBoja) {
        this.boja = novaBoja
        return this.boja;
    }
}

/* 3. */
console.log("auto JSON --> " + JSON.stringify(auto));

console.log("početna brzina: " + auto.brzina);  // 10
console.log("auto će ubrzati na: " + auto.ubrzaj(2));   // 20 (jer tmpVrijeme ide od 1 --> početna (10) + 5+5 )
console.log("brzina nakon ubrzanja: " + auto.brzina);   // 25

console.log("auto će ubrzati nakon 41 sec na : " + auto.ubrzaj(41));

console.log("auto će smanjiti brzinu nakon 2 sekunde kocenja " + auto.zakoci(2));

console.log("trenutna boja auta je: " + auto.boja + ", a nakon promjene boje je " + auto.promijeniBoju("crvena") );

console.log(auto.boja); // crvena

auto.boja = "zelena";
console.log(auto.boja);

auto["boja"] = "žuta";
console.log(auto.boja);


