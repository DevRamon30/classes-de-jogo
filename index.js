class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;   // Nome do herói, por exemplo "Vitor"
      this.idade = idade; // Idade do herói, por exemplo 30
      this.tipo = tipo;   // Tipo do herói, por exemplo "Ninja"
    }
  
    atacar() {
      // Define o tipo de ataque com base no tipo do herói
      let ataque;
      if (this.tipo.toLowerCase() === "mago") {
        ataque = "magia";
      } else if (this.tipo.toLowerCase() === "guerreiro") {
        ataque = "espada";
      } else if (this.tipo.toLowerCase() === "monge") {
        ataque = "artes marciais";
      } else if (this.tipo.toLowerCase() === "ninja") {
        ataque = "shuriken";
      } else {
        ataque = "ataque desconhecido";
      }
  
      // Exibe a mensagem conforme os requisitos:
      // "o {tipo} atacou usando {ataque}"
      console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criação de um objeto do tipo Heroi com as propriedades especificadas
  const heroi = new Heroi("Vitor", 30, "Ninja");
  
  // Invoca o método atacar para exibir a mensagem
  heroi.atacar();
  