const Funcionarios = require("../models/Funcionarios");
const FuncionariosController = {

//Criar F
    async criar(req, res){
        const { nome, cargo } = req.body;
        try {

          const novo =  await Funcionarios.criar(nome, cargo);
         res.status(201).json(novo);
        } catch (err) {
            res.status(500).json({ erro: "Erro ao criar funcionário", detalhes: err.message });
        }
    },

//listar * Funcionarios
    async listar(req, res){
          try {
            const dados = await Funcionarios.listar();
            res.json(dados);
        } catch (err) {
            res.status(500).json({ erro: "Erro ao listar funcionário", detalhes: err.message });
        }
    },


//listarporid
    async listarPorId(req, res){
        const { id } = req.params;
          try {
            const funcionario = await Funcionarios.listarPorId(id);
            if (!funcionario) {
                return res.status(404).json({  erro: "Funcionário não encontrado" });
            }
            res.json(funcionario);
        } catch (err) {
            res.status(500).json({ erro: "Erro ao buscar funcionário", detalhes: err.message });
        }
    },

    // Atualizar funcionário
    atualizarFuncionario: async (req, res) => {
        const { id } = req.params;
        const { nome, cargo } = req.body;
        try {
            const atualizado = await Funcionarios.atualizar(id, nome, cargo);
            res.json(atualizado);
        } catch (err) {
            res.status(500).json({ erro: "Erro ao atualizar funcionário", detalhes: err.message });
        }
    },

    // Deletar funcionário
    deletarFuncionario: async (req, res) => {
        const { id } = req.params;
        try {
            await Funcionarios.deletar(id);
            res.json({ mensagem: "Funcionário deletado com sucesso" });
        } catch (err) {
            res.status(500).json({ erro: "Erro ao deletar funcionário", detalhes: err.message });
        }
    }

};

module.exports = FuncionariosController;