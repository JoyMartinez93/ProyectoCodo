
let select = document.querySelector("#select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");
let name = document.querySelector(".name");
let surname = document.querySelector(".surname");
let email = document.querySelector(".email");
let resume = document.querySelector(".resume");

let total = (cantidad, categoria, div) => {
  if (categoria === "1") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.2}`;
  }

  if (categoria === "2") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.5}`;
  }

  if (categoria === "3") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.85}`;
  }
};

let emptyInput = (input) => {
  if (input.value === "") {
    input.style.borderColor = "red";
    return true;
  } else {
    input.style.borderColor = "green";
  }
};

select.addEventListener("change", (e) => {
  if (e.target.value === "Seleccione categoria") {
    divTotal.textContent = "Total a pagar: $";
  }
  total(cantidad.value, e.target.value, divTotal);
});

cantidad.addEventListener("input", (e) => {
  total(cantidad.value, select.value, divTotal);
});

resume.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !emptyInput(name)  &&
    !emptyInput(surname) &&
    !emptyInput(email) &&
    !emptyInput(cantidad)
  )
  alert("Gracias por su compra"); 
});

function seleccionarCategoria(categoria) {
  // Obtener elementos del formulario
  const selectElement = document.getElementById('select');
  
  // Asignar la categoría seleccionada al formulario
  if (categoria === 'estudiante') {
    selectElement.value = '1';
  } else if (categoria === 'trainee') {
    selectElement.value = '2';
  } else if (categoria === 'junior') {
    selectElement.value = '3';
  }
  
  // Llamar a la función 'total' para actualizar el total a pagar
  total(cantidad.value, selectElement.value, divTotal);
}
