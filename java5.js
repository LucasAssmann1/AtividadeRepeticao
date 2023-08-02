const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    let result = "";
    let valor = Number(frm.inNumero.value);
       
    for(let i = 0; i <= valor; i++){
        if( (i % 2) != 0 ){
        result += (i) + " \n";
        }
    }

    resp.innerText = result;

 })