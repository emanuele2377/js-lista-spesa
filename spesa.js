const listaDellaSpesa = [
    "acqua",
    "olio",
    "farina",
    "lievito",
    "uova"
];

const contenitore = document.getElementById("listaSpesa");

let i = 0;

while(i < listaDellaSpesa.length) {

    const element = listaDellaSpesa[i];

    const elementHTML = document.createElement("li");
    elementHTML.innerHTML = element;
    contenitore.append(elementHTML);

    i++;
}

