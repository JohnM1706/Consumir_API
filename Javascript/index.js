// esto es para poder consumir los datos de JSONplaceholder
const ListUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  let tableBody = ``;
  //    Esto es para optener los datos de los Usuarios en un Array
  users.forEach((user, index) => {
    tableBody += `<tr>
        <td class='centered'>${user.id}</td>
        <td class='centered'>${user.name}</td>
        <td class='centered'>${user.username}</td>
        <td class='centered'>${user.email}</td>
        <td class='centered'>${user.website}</td>

        </tr>`;
  });
  // una formade utilizar y mostrar losdatos en el html
  document.getElementById("tableBody_Users").innerHTML = tableBody;
  // segunda forma de mostrar los datos en el htmel
  // tableBody_Users.innerHTML=tableBody;
};
// esto es para crear una respuesta en la consola
window.addEventListener("load", function () {
  ListUsers();
});
