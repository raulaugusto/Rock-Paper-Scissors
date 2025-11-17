const choices = ["Pedra", "Papel", "Tesoura"];

const matchups = {
  0: [1, 2],
  1: [2, 0],
  2: [0, 1],
};

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choice;
}

function getHumanChoice() {
  const choice = parseInt(prompt("Faça sua escolha"));
  return choice;
}

function evalChoices(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Empate";
  }
  if (computerChoice === matchups[humanChoice][0]) {
    return "A máquina venceu";
  } else {
    return "O humano venceu";
  }
}

while (true) {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  let winner = evalChoices(humanChoice, computerChoice);
  alert(
    `O humano escolheu: ${choices[humanChoice]} \nA máquina escolheu: ${choices[computerChoice]}\nO resultado é:\n${winner}`
  );
}
