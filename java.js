const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    let numPos = 0;

    for(let i = 0; i < 6; ++i){
        const numero1 = Number(frm.inNumero[i].value);
        console.log(numero1);

        if(numero1 > 0 ){
            ++numPos;}
    }

    resp.innerText = numPos + " Valores positivos";
})