const infoForm = document.querySelector('form');
infoForm.addEventListener("submit", 
    function(event){
        console.log('event', event, typeof event);
        event.preventDefault();

        const myName = document.getElementById("name").value;
        console.log("Nome e Cognome:", myName, typeof myName);

        const myDistance = document.getElementById("distance").value;
        console.log("Distanza:", myDistance, "km" ,typeof myDistance);
    
        const myAge = document.getElementById("age").value;
        console.log("Fascia d'età:", age.value, typeof age.value);

        const myTicket = document.getElementById("my-ticket");
        
            if(myAge == ("minorenne" || "maggiorenne" || "over65")){
            myTicket.classList.replace('noneticket', 'ticket');
        }

        // PREZZO BASE
        let priceTot = myDistance * 0.21;
        console.log("priceTot:", priceTot.toFixed(2), "€");

        // SCONTO
        if (myAge === "minorenne"){
            priceTot = priceTot * 0.80;
            document.getElementById("discount").innerHTML= "Offerta Minorenni";
        }

        else if (myAge === "over65"){
            priceTot = priceTot * 0.60;
            document.getElementById("discount").innerHTML= "Offerta Over 65";
        }
        
        else{
            document.getElementById("discount").innerHTML= "Offerta Standard";
        }

        // PREZZO FINALE
        console.log("priceTot:", priceTot.toFixed(2), "€");

        document.getElementById("passenger").innerHTML= myName;
        document.getElementById("price").innerHTML= priceTot.toFixed(2) + "€";

        const cpCode =  Math.floor(Math.random() * 100000);

        document.getElementById("codiceCP").innerHTML = cpCode;
    }

)