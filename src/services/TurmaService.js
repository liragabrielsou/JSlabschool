const database = require('../database');


module.exports = {
    // Pesquisar todas as turmas
    searchTurmas: () => {
        return new Promise(
            (accepted, rejected) => {
                database.query("SELECT * FROM turma", (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    // Pesquisar a turma pelo ID
    serchTurmaById: (codigo) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`SELECT * FROM turma WHERE id = ${codigo}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )

    },
    // Criar a turma
    createTurma: (nome, descricao, quantidade_alunos) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`INSERT INTO turma (nome, descricao, quantidade_alunos) VALUES 
                                ('${nome}', '${descricao}', ${quantidade_alunos})`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    // Atualizar a turma
    updateTurma: (id, nome, descricao, quantidade_alunos) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`UPDATE turma SET nome = '${nome}', descricao = '${descricao}', quantidade_alunos = '${quantidade_alunos}' WHERE id = ${id}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    // Deletar a turma
    deleteTurma: (id) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`DELETE FROM turma WHERE id = ${id}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    // Adicionar alunos na turma
    AddAlunos:(id) => {
        return new Promise((accepted, rejected) => {
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos + 1 WHERE id = ${id}`, (error, result) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    }, 
    // Remover alunos da turma
    DelAluno:(id) => {
        return new Promise((accepted, rejected) => {
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos - 1 WHERE id = ${id}`, (error, result) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    }
}