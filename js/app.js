let estudiantes = [];

const formulario = document.querySelector("#formEstudiante");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Formulario enviado");
});

const nombre = document.querySelector("#nombre").value;
const correo = document.querySelector("#correo").value;
const programa = document.querySelector("#programa").value;

const estudiante = {
    id: Date.now(),
    nombre,
    correo,
    programa
};

function mostrarEstudiantes(lista = estudiantes) {

    const tabla = document.querySelector("#tablaEstudiantes");

    tabla.innerHTML = "";

    lista.forEach(estudiante => {

        tabla.innerHTML += `
            <tr>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.correo}</td>
                <td>${estudiante.programa}</td>
                <td>Acciones</td>
            </tr>
        `;
    });
}



estudiantes.push(estudiante);
mostrarEstudiantes();
formulario.reset();