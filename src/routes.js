const express = require('express')
const route = express.Router()
const alunoController = require("./controllers/AlunoController")
const turmaController = require("./controllers/TurmaController")
const cors = require("cors")

//Routes -> Controller

route.options("*", cors)
//END POINT ALUNOS
route.get('/alunos', alunoController.readyAlunos)//Ready
route.get('/alunos/:codigo', alunoController.readyAlunosByCurso) //Ready
route.post('/aluno', alunoController.createAluno) //Create
route.put('/aluno/:codigo', alunoController.updateAluno) //Update
route.delete('/aluno/:codigo', alunoController.deleteAluno) //Delete

//END POINT TURMA
route.get('/turmas', turmaController.readyTurmas)//Ready
route.post('/turma', turmaController.createTurma) //Create
route.put('/turma/:codigo', turmaController.updateTurma) //Update
route.delete('/turma/:codigo', turmaController.deleteTurma) //Delete


module.exports = route
