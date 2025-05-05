let clientes = [];
function registrar() {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let ollista = document.getElementById("ollista");
  if (nombre === "" || correo === "" || telefono === "" || direccion === "") {
    alert("Porfavor completa todos los campos");
    return;
  }
  let cliente = {
    nombre: nombre,
    correo: correo,
    telefono: telefono,
    direccion: direccion,
  };
  clientes.push(cliente);
  ollista.innerHTML = "";

  for (let i = 0; i < clientes.length; i++) {
    let li = document.createElement("li");
    li.textContent = clientes[i];
    let div = `<strong>Nombre : </strong><span>${clientes[i].nombre}</span><br><strong>Correo: </strong> <span>${clientes[i].correo}</span><br><strong>Telefono: </strong> <span>${clientes[i].telefono}</span><br><strong>Dirección : </strong> <span>${clientes[i].direccion}</span>`;
    li.innerHTML = div;
    ollista.appendChild(li);
  }
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
}
