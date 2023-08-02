const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let valor = Number(frm.inNumero.value);
    let result = "";

    for(let i = 1; i <= valor; i++){

        if(valor%i==0){

            result+= (i) + "\n";
        }
    }

    resp.innerText = result;

 })