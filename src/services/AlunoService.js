const database = require('../database');
// Services -> Database

module.exports = {
    // Metodo para mostrar todos os Alunos
    searchAlunos: () => {
        return new Promise(
            (accepted, rejected) => {
                database.query("SELECT * FROM aluno", (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    //Pesquisar alunos por curso 
    getAlunosByCurso: (codigo) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`SELECT * FROM aluno WHERE fk_turma = ${codigo}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    //Pesquisar o aluno por ID
    getAlunoById: (id) => {
        return new Promise((accepted, rejected) => {
            database.query(`SELECT * FROM aluno WHERE id = ${id}`, (error, result) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(result)
                })
            }
        )
    },
    //Cadastrar Aluno
    createAluno: (nome, telefone, data, endereco, turma) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`INSERT INTO aluno (nome, telefone, dt_nascimento, endereco, fk_turma) VALUES ('${nome}', '${telefone}', '${data}', '${endereco}', ${turma})`, 
                (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    //Atualizar informações do aluno
    updateAluno: (id, nome, telefone, data, endereco) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`UPDATE aluno SET nome = '${nome}', telefone = '${telefone}', dt_nascimento = '${data}', endereco = '${endereco}' WHERE id = ${id}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    //Deletar aluno
    deleteAluno: (id) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`DELETE FROM aluno WHERE id = ${id}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    }

}
