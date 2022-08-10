
//Desafío: Incorporar Arrays

let ContinueOrClose = "N";
let counter = 0;

// Un jugador individual. Tiene propiedades y comportamiento para un jugador.
class Player {
    constructor(name) {
        this.name = name;
    }
    play() {
      console.log(this.name, "score: ", Math.floor(Math.random() * 21)  )
    }
  }
  
  // Clase que contiene una colección de jugadores y propiedades y funciones para el grupo
  class Players {
    constructor(){
      this.players = []
    }

    // Crea una nueva jugadora y guárdala en la colección.
    newPlayer(name){
      let p = new Player(name)
      this.players.push(p)
      return p
    }
    
     // Retorno de todos los jugadores
    get allPlayers(){
      return this.players
    }
    
    
    // Numero de Jugadores
    get numberOfPlayers(){
        return this.players.length
    }
  }
  

 let league = new Players()

if (counter == 0 )
{
        // Agrega estos 2 jugadores por default simpre la primera vez que corre el Ciclo
    league.newPlayer("Maria")
    league.newPlayer("Pablo")
}


//do
do {


    // Ingrese a agregue el nuevo jugador
  league.newPlayer(prompt("Enter the New Player Name: "))

    // Confirmar si desea Continuar o Salir
  ContinueOrClose = prompt("Presiona C para continuar en el programa y Agregar otro Jugador /o cualquier otra letra para salir ")
  //alert("Seguir = " + seguir )
  
  if (ContinueOrClose != "C")
  {

  // Muestra todos los players + el Numero de jugadores
  console.log(league.numberOfPlayers + " Players")
  console.log(league.allPlayers)
  league.allPlayers.forEach(player => player.play())

  }

// Contabilizar 1 Corrida mas, 
  counter++;


  // Validar si desea Salir
  } while (ContinueOrClose == "C"); 


// Fin del Programa
  alert("End ")
  


