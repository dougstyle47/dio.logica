class heroi{
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
    
        ataque(){ 
            let ataque;
            
            if(this.tipo === "mago"){
                ataque = "magia"

            } else if(this.tipo === "guerreiro"){
                ataque = "espadas"
         
            } else if(this.tipo === "monge"){
                ataque = "artes maciais"
            
            } else if(this.tipo === "ninja"){
                ataque = "shuriken"
             
            } else {
                ataque = "nao existe essa opção"
            }
        
        console.log(`o ${this.tipo} de idade ${this.idade} atacou usando ${ataque}`);
    }
      
}

let mago = new heroi("marine1" , 23, "mago");
let guerreiro = new heroi("marine1" , 24, "guerreiro");
let monge = new heroi("marine1" , 25, "monge");
let ninja = new heroi("marine1" , 26, "ninja");


mago.ataque();
guerreiro.ataque();
monge.ataque();
ninja.ataque()
