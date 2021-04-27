var express = require("express");
const segundaRota = express.Router();

//METODO POST

segundaRota.post("", (req, resp) => {
  resp.send(
    `# Dados # \nCurso: ${req.body.curso} \nEmpresa: ${req.body.empresa} \nProfessor: ${req.body.professor}`
  );
});

//METODO PUT

segundaRota.put("/:identificador", (req, resp) => {
  resp.send(
    `Metodo PUT utilizado para atualizar o id: ${req.params.identificador}`
  );
});

//METODO PATCH

segundaRota.patch("/:identificador", (req, resp) => {
  resp.send(
    `Metodo PATCH utilizado para atualizar o id: ${req.params.identificador}`
  );
});

//METODO DELETE

segundaRota.delete("/:identificador", (req, resp) => {
  resp.send(
    `Metodo DELETE utilizado para atualizar o id: ${req.params.identificador}`
  );
});

module.exports = segundaRota;
