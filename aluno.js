function Aluno (nome, quantidadeFaltas, notas) {
  this.nome = nome;
  this.quantidadeFaltas = quantidadeFaltas;
  this.notas = notas;
  
  this.faltas = () => this.quantidadeFaltas += 1;
  this.calcularMedia = () => {
    let soma = 0
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i]
    }
    return soma / this.notas.length
  };

  return {
    nome: this.nome,
    quantidadeFaltas: this.quantidadeFaltas,
    notas: this.notas,
    calcularMedia: this.calcularMedia,
    faltas: this.faltas
  };
};

module.exports = Aluno;
