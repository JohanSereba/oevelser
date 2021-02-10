
let mineBilleter = [];

function kjopBillet(){


        let ut = "<table><tr>" +
            "<th>Film</th><th>Antall</th><th>Navn</th><th>Etternavn</th><th>Telefonnr</th><th>Epost</th>" +
            "</tr>";
        for (let p of mineBilleter){
            ut+="<tr>";
            ut+="<td>"+p.film+"</td><td>"+p.antall+"</td><td>"+p.navn+"</td><td>"+p.etternavn+"</td><td>"+p.telefonnr+"</td><td>"+p.epost+"</td>";
            ut+="</tr>";


        }

        document.getElementById("container").innerHTML=ut;


        //nullstiller inputbokser
        document.getElementById("filmValg").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("navn").value="";
        document.getElementById("epost").value="";
        document.getElementById("antall").value="";

        //nullstiller error melding
    document.getElementById("error").innerHTML="";
    document.getElementById("error2").innerHTML="";
    document.getElementById("error3").innerHTML="";
    document.getElementById("error4").innerHTML="";

}

function bestilling(){


         if (document.getElementById("tall").value.length ===0) {

             document.getElementById("error1").innerHTML = "Må skrive noe inn i Antall";
         }

            else if (document.getElementById("navn").value.length ===0){

                document.getElementById("error").innerHTML="Må skrive noe inn i Fornavn";
            }

            else if (document.getElementById("etternavn").value.length ===0){

                document.getElementById("error2").innerHTML="Må skrive noe inn i Etternavn";

            }
            else if (document.getElementById("telefonnr").value.length ===0){

                document.getElementById("error3").innerHTML="Må skrive noe inn i Telefonnr";

            }
            else if (document.getElementById("epost").value.length ===0){

                document.getElementById("error4").innerHTML="Må skrive noe inn i Epost";

            }

            else {

                const navn = document.getElementById("navn").value;
                const etternavn = document.getElementById("etternavn").value;
                const telefonnr = document.getElementById("telefonnr").value;
                const epost = document.getElementById("epost").value;
                const film = document.getElementById("filmValg").value;
                const tall1 = document.getElementById("tall").value;
                const antall = Number(tall1);


        const kjop = {
            film: film,
            antall: antall,
            navn: navn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        };
        mineBilleter.push(kjop);



        kjopBillet()
    }

}
function slett(){
    let myobj = document.getElementById("container");
    myobj.remove();



}
