const grid = new gridjs.Grid({
  columns: [
    "Nombre",
    "Email",
    "",
   ],
  data: Array(5).fill().map(x => [
    faker.name.findName(),
    faker.internet.email(),
    gridjs.html(
      "<a class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>Editar</a>"
    )
  ])
}).render(document.getElementById("tabla"));
