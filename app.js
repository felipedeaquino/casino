'use strict';

const fs = require('fs');
const Cassino = require('./Cassino');

const teste = () => {
  const estoril = new Cassino('Estoril');
  fs.writeFile('./felipe.puziol', 'Resultados:', { encoding: 'utf-8' }, (err) => {
    if (err) throw err;
  })
  console.log('Arquivo de registro de resultados criado com sucesso!')
  estoril.JogarDado(6);
};

teste();