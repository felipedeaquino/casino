'use strict';

const Dado = require('./Dado');
const fs = require('fs');

class Casino {
  constructor(nome) {
    this.nome = nome;
  }

  JogarDado(lados) {
    this.dado = new Dado(lados);

    const jogada = (dado) => {
      return this.dado.Rolar() + this.dado.Rolar();
    }

    const pontosDaCasa = jogada(this.dado);
    const pontosJogador = jogada(this.dado);
    console.log(pontosDaCasa);
    console.log(pontosJogador);
    let resultadoJogador;

    pontosJogador > pontosDaCasa ? resultadoJogador = 'Vitória' : resultadoJogador = 'Derrota';
    fs.promises.appendFile('felipe.puziol', "\n" + `${resultadoJogador}.`, (err) => {
      if (err) throw err;
    });
    // fs.promises.appendFile('felipe.puziol', "\n" + `No dado de ${this.dado.lados} lados você tirou: ${this.dado.Rolar()}.`, (err) => {
    //   if (err) throw err;
    // });
    console.log('Rodada registrada!');
    // console.log(`Bem-vindo ao Casino ${this.nome}! No dado de ${this.dados.lados} lados você tirou: ${this.dados.Rolar()}.`);
  }
}

module.exports = Casino;
// export default Casino; CASO SEJA .mjs ou type esteja definido como module no package.json
