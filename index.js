class Pessoa{
    constructor(nome, datanascimento, anonascimento, altura){
      this.nome = nome;
      this.data = datanascimento;
      this.ano = anonascimento;
      this.altura = altura;

    }

  mostrarAtributos(){
    console.log(this.nome);
    console.log(this.data);
    console.log(this.ano);
    console.log(this.altura);
  }

  calcularIdade(){
   return 2022 - this.ano;
  }

  idade(){
    return this.calcularIdade();
  }
  
}

let pessoa = new Pessoa('mendes', '15.03', '2006', '1.90');
pessoa.mostrarAtributos();
console.log(pessoa.idade());