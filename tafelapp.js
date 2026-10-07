let puzzelTafel = 0;

function toonHulp() {
    const tafel = Number(document.getElementById("inputHulp").value);
    let tekst = "";

    for (let i = 1; i <= 10; i++) {
        tekst += i + " x " + tafel + " = " + (i * tafel) + "<br>";
    }

    document.getElementById("outputHulp").innerHTML = tekst;
}

function maakPuzzel() {
    puzzelTafel = Number(document.getElementById("inputPuzzel").value);
    const output = document.getElementById("outputPuzzel");
    output.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        output.innerHTML += `
      <div class="input-group mb-2">
        <span class="input-group-text">${i} x ${puzzelTafel} =</span>
        <input type="number" class="form-control antwoord" data-som="${i}">
      </div>`;
    }

    document.getElementById("checkKnop").classList.remove("d-none");
    document.getElementById("resultaat").textContent = "";
}

function controleer() {
    const vakjes = document.querySelectorAll(".antwoord");
    let goed = 0;

    vakjes.forEach(function (vakje) {
        const i = Number(vakje.dataset.som);
        const juist = i * puzzelTafel;

        vakje.classList.remove("is-valid", "is-invalid");

        if (vakje.value !== "" && Number(vakje.value) === juist) {
            vakje.classList.add("is-valid");
            goed++;
        } else {
            vakje.classList.add("is-invalid");
        }
    });

    const resultaat = document.getElementById("resultaat");
    if (goed === vakjes.length) {
        resultaat.textContent = "Alles goed! 🎉";
    } else {
        resultaat.textContent = goed + " van de " + vakjes.length + " goed.";
    }
}