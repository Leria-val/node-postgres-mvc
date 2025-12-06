const express = require("express");
const FuncionariosController = require("../controllers/FuncionariosController");

const rotas = express.Router();

// Rota de cadastro de Funcionarios
rotas.post("/", FuncionariosController.criar);
rotas.get("/", FuncionariosController.listar);
rotas.get("/:id", FuncionariosController.listarPorId);
rotas.put("/:id", FuncionariosController.atualizarFuncionario);
rotas.delete("/:id", FuncionariosController.deletarFuncionario);

module.exports = rotas;
