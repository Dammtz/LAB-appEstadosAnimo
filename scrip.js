document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fetch-btn").addEventListener("click", handleFetchClick);
});

function handleFetchClick() {
    const input = document.getElementById ("hoy-sent").value.trim().toLowerCase();
    const resultado = sentimientos(input);

    document.getElementById("texto").innerText = resultado.texto;
    const img = document.getElementById("imagen");
    img.src = resultado.imagen;
    img.style.display = "block";
}


const sentimientos = (hoy) => {
    let message = {};  
    
    switch (hoy) {
        case "feliz":
            message = { texto: "Me da gusto que te sientas feliz, recuerda que la felicidad no es la meta, si no el camino. Te regalo este dinosaurio Dev de la suerte.",
                        imagen: "img/dino.jpg"
            };
            break; 
        case "triste":
            message = {texto: "Lamento que te sientas triste. Recuerda que todo es momentaneo y te mando un abrazo. Te regalo este dinosaurio dev emo.",
                      imagen: "img/dino-emo.png"
            };
            break; 
        default: 
        message = {texto: "No te hagas, todos tenemos sentimientos, cuentame si te sientes feliz o triste para acompañarte.",
                  imagen: "img/dino-enojao.png"
            };
     };
    return message; 
};