const exp = require("express");

const host = exp();

const Platillos = [
  {
    id: "1",
    Nombre: "Masita de nuez",
    Precio: "$1.10 c/u",
  },
  {
    id: "2",
    Nombre: "Arroz con menestra y pollo",
    Precio: "$4.5",
  },
  {
    id: "3",
    Nombre: "Burrito de carne",
    Precio: "$3.5 c/u",
  },
];

host.get("/api/comida", (req, res, next) => {
  const comida = Platillos;
  res.send(comida);
  next();
});

host.get("/api/comida/:id", (req, res, next) => {
  const comida = Platillos.find((p) => {
    return p.id === req.params.id;
  });
  res.send(comida);
  next();
});
host.listen(5000);
