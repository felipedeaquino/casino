'use strict';

class Dado {
  constructor(lados) {
    this.lados = lados;
  }
    
  Rolar() {
    return Math.floor(Math.random() * (this.lados - 1) + 1);
  }
};

// console.log(new Dado(100).Rolar());
// console.log(new Dado(8).Rolar());

module.exports = Dado;
// export default Dado; CASO SEJA .mjs ou type esteja definido como module no package.json
