// RICHIESTE

const infoForm = document.querySelector('form');
infoForm.addEventListener("submit", 
    function(event){
        console.log('event', event, typeof event);
        event.preventDefault();

        const myName = document.getElementById("name");
        console.log("Nome e Cognome:", myName.value, typeof myName.value);

        const myDistance = document.getElementById("distance");
        console.log("Distanza:", myDistance.value, "km" ,typeof myDistance.value);
    
        const myAge = document.getElementById("age").value;
        console.log("Fascia d'età:", age.value, typeof age.value);

        const myTicket = document.getElementsByClassName("noneticket");

        if (myTicket.classList.contains("noneticket")){
            myTicket.classList.replace('noneticket', 'ticket');
        }

        // PREZZO BASE
        let pricetot = myDistance.value * 0.21;
        console.log("pricetot:", pricetot.toFixed(2), "€");

        // SCONTO
        if (myAge === "minorenne"){
            pricetot = pricetot * 0.80;
        }

        else if (myAge === "over65"){
            pricetot = pricetot * 0.60;
        }

        // PREZZO FINALE
        console.log("pricetot:", pricetot.toFixed(2), "€");
    }

)