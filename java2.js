    const frm = document.querySelector("form");
    const resp = document.querySelector("pre");

    frm.addEventListener("submit", (e) => {
        e.preventDefault();

        let noel = "";

        let valor = Number(frm.inNumero.value);
        
        for(let i = 0; i < valor; i++){
            if(i != valor-1) {
                noel+= "Ho ";
            } else{
                noel+= "Ho!";
            }
        }
        
        resp.innerText = noel;
    })