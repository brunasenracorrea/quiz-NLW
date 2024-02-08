const perguntas = [
  {
    pergunta: "Quando League of Legends foi oficialmente lançado?",
    respostas: [
      "2008",
      "2009",
      "2010",
    ],
    correta: 2
  },
  {
    pergunta: "Qual personagem é conhecido como o mascote de League of Legends?",
    respostas: [
      "Ashe",
      "Teemo",
      "Darius",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do continente onde a maioria das batalhas em League of Legends ocorrem?",
    respostas: [
      "Runeterra",
      "Shurima",
      "Noxus",
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o primeiro campeão a ser lançado em League of Legends?",
    respostas: [
      "Ashe",
      "Ryze",
      "Annie",
    ],
    correta: 2
  },
  {
    pergunta: "Quantas linhas existem em Summoner's Rift, o mapa principal de League of Legends?",
    respostas: [
      "2",
      "3",
      "4",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o título dado ao jogador que é reconhecido como o melhor do mundo em League of Legends?",
    respostas: [
      "Rei",
      "Campeão Mundial",
      "Invocador",
    ],
    correta: 2
  },
  {
    pergunta: "Qual foi o primeiro evento mundial de League of Legends?",
    respostas: [
      "Worlds",
      "All-Star",
      "Mid-Season Invitational",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome da organização que supervisiona a produção e o desenvolvimento de League of Legends?",
    respostas: [
      "Blizzard",
      "Riot Games",
      "Valve Corporation",
    ],
    correta: 1
  },
  {
    pergunta: "Qual foi o primeiro campeão a ser lançado com uma skin lendária?",
    respostas: [
      "Ashe",
      "Annie",
      "Tryndamere",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é considerado o criador de League of Legends?",
    respostas: [
      "Marc Merrill",
      "Steve Jobs",
      "Bill Gates",
    ],
    correta: 0
  }
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
  }