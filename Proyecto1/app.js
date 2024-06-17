const ex = require("express");

const app = ex();

const PaisesyCiudades = [
  {
    id: "1",
    Pais: "Ecuador",
    Ciudad: "Guayaquil",
  },
  {
    id: "2",
    Pais: "Alemania",
    Ciudad: "Amsterdam",
  },
  {
    id: "3",
    Pais: "España",
    Ciudad: "Barcenola",
  },
];

app.get("/api/pais", (req, res, next) => {
  const pais = PaisesyCiudades;
  res.send(pais);
  next();
});

app.get("/api/pais/:id", (req, res, next) => {
  const pais = PaisesyCiudades.find((p) => {
    return p.id === req.params.id;
  });
  res.send(pais);
  next();
});
app.listen(2000);
