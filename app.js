const moves = [
  {
    name: 'Rock',
    img: "https://lh3.googleusercontent.com/proxy/9FOtR1WQZWUk31wOP7KnaMuOWwmViCwuoeHJsztDOz7h1nRHTk-KIYdYIU31ZnSaJXG7lVxmmPzfELYAYHS7wkjHPyQdp0HdlJyTGTTTutLZVxGmxABRI8Q7CEu820wIKB9SOlWhnUez-lvv8b9TU6fPLM8"
  },
  {
    name: 'Paper',
    img: "https://i.pinimg.com/originals/28/8e/fd/288efd3adc06f4c31061390f0c5f90fa.jpg"
  },
  {
    name: 'Scissors',
    img: "https://lh3.googleusercontent.com/proxy/BOl7L7oVAxJrAIk9WJQfUeZxOBjvEv7diBQ1VaXG4GNHxk3cw2gBwsdyMS6qWhZrTvEwzDlNRRPTVyOtgR_p5QSfWybocKc"
  }]

function userMove(move) {
  let user = move

  // drawCard(move)
  // console.log('this is working noob')
  npcCard(user)
}
function npcCard(user) {
  const  i = (Math.floor(Math.random()* moves.length))
  const npc = moves[i]
  // debugger
  if (npc == user) {
    console.log("You Tied, Try Again")
    alert("You Tied, Try Again")
  }
  if (npc == moves[2] && user == 'Paper') {
    console.log("You Lose, Try Again")
    alert("You Lose, Try Again")
  }
  if (npc == moves[1] && user == 'Rock') {
    console.log("You Lose, Try Again")
    alert("You Lose, Try Again")
  }
  if (npc == moves[0] && user == 'Scissors') {
    console.log("You Lose, Try Again")
    alert("You Lose, Try Again")
  }
  if (npc == moves[2] && user == 'Rock') {
    console.log("You Win!")
    alert("You Win!")
  }
  if (npc == moves[0] && user == 'Paper') {
    console.log("You Win!")
    alert("You Win!")
  }
  if (npc == moves[1] && user == 'Scissors') {
    console.log("You Win!")
    alert("You Win!")
  }
}

// function drawCard(move) {

//   const cardElem = document.getElementById('card-choice')
//   cardElem.innerHTML = `
// <div>
//   <img src="${card.img}"/>
//   <h2>
//     ${card.name}
//   </h2>
// </div>`
// }