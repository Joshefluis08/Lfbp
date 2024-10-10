// Función para establecer una cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convertir días a milisegundos
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // El path asegura que la cookie esté disponible en toda la aplicación
}

// Función para obtener una cookie
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';'); // Dividir las cookies en un array
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // Eliminar espacios
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); // Si la cookie es encontrada, retornar su valor
    }
    return null; // Retornar null si la cookie no es encontrada
}

// Función para borrar una cookie
function eraseCookie(name) {
    setCookie(name, "", -1); // Establecer la cookie con un tiempo de expiración en el pasado
}

// Ejemplo de uso
document.addEventListener("DOMContentLoaded", function() {
    // Comprobar si la cookie ya existe
    const userCookie = getCookie("username");
    if (!userCookie) {
        const username = prompt("Por favor, ingresa tu nombre:");
        if (username) {
            setCookie("username", username, 7); // Establecer la cookie por 7 días
            alert("Cookie establecida: " + username);
        }
    } else {
        alert("Bienvenido de nuevo, " + userCookie);
    }
});