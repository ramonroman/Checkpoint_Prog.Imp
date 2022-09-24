const Aluno = require('./aluno');
const estudantes = require('./estudantes');

function Curso(nome, notaAprovacao, faltasMaximas) {
  this.nome = nome;
  this.notaAprovacao = notaAprovacao;
  this.faltasMaximas = faltasMaximas;
  this.listaEstudantes = estudantes;
  
  this.adicionarAluno = (nome, quantidadeFaltas, notas) => {
    const aluno = new Aluno(nome, quantidadeFaltas, notas)
    this.listaEstudantes.push(aluno)
  };

  this.aprovou = (aluno) => {
    const media = aluno.calcularMedia()
    
    if (media >= this.notaAprovacao && aluno.quantidadeFaltas < this.faltasMaximas) {
      return true;
    }

    if (aluno.quantidadeFaltas === this.faltasMaximas && aluno.media > (this.notaAprovacao * 1.1)) {
      return true;
    }
    
    return false;
  };

  this.verificaAlunos = () => {
    return this.listaEstudantes.map(aluno => this.aprovou(aluno))
  };

  return {
    nome: this.nome,
    notaAprovacao: this.notaAprovacao,
    faltasMaximas: this.faltasMaximas,
    listaEstudantes: this.listaEstudantes,
    adicionarAluno: this.adicionarAluno,
    aprovou: this.aprovou,
    verificaAlunos: this.verificaAlunos
  };
};

module.exports = Curso;
