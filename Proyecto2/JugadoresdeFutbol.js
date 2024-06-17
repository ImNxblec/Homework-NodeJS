const exp = require("express");

const host = exp();

const Jugadores = [
  {
    id: "1",
    Nombre: "Cristiano ronaldo",
    Equipo: "Al-Nassr F. C",
  },
  {
    id: "2",
    Nombre: "Messi",
    Equipo: "Inter Miami ",
  },
  {
    id: "3",
    Nombre: "Erling Haaland",
    Equipo: "Manchester City F. C",
  },
];

host.get("/api/jugadores", (req, res, next) => {
  const jugadores = Jugadores;
  res.send(jugadores);
  next();
});

host.get("/api/jugadores/:id", (req, res, next) => {
  const jugadores = Jugadores.find((p) => {
    return p.id === req.params.id;
  });
  res.send(jugadores);
  next();
});
host.listen(4000);
