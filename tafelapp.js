let puzzelTafel = 0;
let puzzelSom = 1;
let antwoordGecontroleerd = false;

function toonHulp() {
    const tafel = Number(document.getElementById("inputHulp").value);
    let tekst = "";

    for (let i = 1; i <= 10; i++) {
        tekst += i + " x " + tafel + " = " + (i * tafel) + "<br>";
    }

    document.getElementById("outputHulp").innerHTML = tekst;
}

function maakPuzzel() {
    const tafelInput = document.getElementById("inputPuzzel");
    if (tafelInput.value.trim() === "") {
        document.getElementById("resultaat").textContent = "Vul eerst een tafel in.";
        return;
    }

    puzzelTafel = Number(tafelInput.value);
    puzzelSom = 1;
    antwoordGecontroleerd = false;
    toonSom();
    document.getElementById("checkKnop").classList.remove("d-none");
    document.getElementById("checkKnop").textContent = "Controleer";
    document.getElementById("resultaat").textContent = "";
}

function toonSom() {
    const output = document.getElementById("outputPuzzel");
    output.innerHTML = `
      <p>Som ${puzzelSom} van 10</p>
      <div class="input-group mb-2">
        <span class="input-group-text">${puzzelSom} x ${puzzelTafel} =</span>
        <input type="number" class="form-control antwoord" aria-label="Antwoord op ${puzzelSom} keer ${puzzelTafel}">
      </div>`;
}

function verwerkAntwoord() {
    const knop = document.getElementById("checkKnop");
    const resultaat = document.getElementById("resultaat");

    if (antwoordGecontroleerd) {
        puzzelSom++;
        antwoordGecontroleerd = false;
        toonSom();
        knop.textContent = "Controleer";
        resultaat.textContent = "";
        return;
    }

    const antwoord = document.querySelector(".antwoord");
    const juist = puzzelSom * puzzelTafel;
    antwoord.classList.remove("is-valid", "is-invalid");

    if (antwoord.value !== "" && Number(antwoord.value) === juist) {
        antwoord.classList.add("is-valid");
        antwoord.disabled = true;

        if (puzzelSom === 10) {
            resultaat.textContent = "je mag naar huis!";
            knop.classList.add("d-none");
            return;
        }

        antwoordGecontroleerd = true;
        knop.textContent = "Volgende som";
        resultaat.textContent = "Je mag naar huis!";
    } else {
        antwoord.classList.add("is-invalid");
        resultaat.textContent = "Maak een afspraak met Ids";
    }
}