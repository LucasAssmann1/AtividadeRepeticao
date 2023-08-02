    const frm = document.querySelector("form");
    const resp = document.querySelector("pre");

    frm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let calc = "";
        let valor = Number(frm.inNumero.value);
        

        for(let i = 1; i <= valor; i++){
            calc += `${i} ${i*i} ${i*i*i} \n`; 
        }
        resp.innerText = calc;
    })
