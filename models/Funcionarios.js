const db = require("../configs/database");

const Funcionarios = {

    // Listar os funcionarios
    listar: async () => {
        try {
            return await db.any("SELECT * FROM funcionarios");
        } catch (err) {
            console.log("Erro ao listar funcionários:", err);
            throw err;
        }
    },

    // Buscar por id
    listarPorId: async (id) => {
        try {
            return await db.oneOrNone("SELECT * FROM funcionarios WHERE id = $1", [id]);
        } catch (err) {
            console.log("Erro ao buscar funcionário por ID:", err);
            throw err;
        }
    },

    // Criar novo funcionario
    criar: async (nome, cargo) => {
        try {
            return await db.one(
                "INSERT INTO funcionarios (nome, cargo) VALUES ($1, $2) RETURNING *",
                [nome, cargo]
            );
        } catch (err) {
            console.log("Erro ao criar funcionário:", err);
            throw err;
        }
    },

    // Atualizar funcionario
    atualizar: async (id, nome, cargo) => {
        try {
            return await db.one(
                "UPDATE funcionarios SET nome = $1, cargo = $2 WHERE id = $3 RETURNING *",
                [nome, cargo, id]
            );
        } catch (err) {
            console.log("Erro ao atualizar funcionário:", err);
            throw err;
        }
    },

    // Deletar funcionario
    deletar: async (id) => {
        try {
            return await db.none("DELETE FROM funcionarios WHERE id = $1", [id]);
        } catch (err) {
            console.log("Erro ao deletar funcionário:", err);
            throw err;
        }
    }
};

module.exports = Funcionarios;