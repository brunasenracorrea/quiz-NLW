const perguntas = [
  {
    pergunta: "Qual é o nome do guerreiro demônio conhecido por sua sede insaciável por batalha em League of Legends?",
    respostas: [
      "Darius",
      "Aatrox",
      "Yasuo",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o título dado ao líder supremo de Noxus em League of Legends?",
    respostas: [
      "Rei",
      "Imperador",
      "Grão-General",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do vasto império desértico onde muitos campeões de League of Legends têm origem?",
    respostas: [
      "Demacia",
      "Piltover",
      "Shurima",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o título dado ao líder do clã Ioniano em League of Legends?",
    respostas: [
      "Grão-Mestre",
      "Ancião",
      "Elder",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o poderoso mago controlador de gelo em League of Legends?",
    respostas: [
      "Lissandra",
      "Anivia",
      "Brand",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o título dado ao líder da tribo Freljord em League of Legends?",
    respostas: [
      "Rei",
      "Grande Chefe",
      "Reverenciado",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome da cidade-estado tecnologicamente avançada onde a maioria dos campeões de Piltover reside em League of Legends?",
    respostas: [
      "Zaun",
      "Bandle City",
      "The Glade",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o nome da temida guilda de assassinos de Zaun em League of Legends?",
    respostas: [
      "Ninja Tabi",
      "Kinkou",
      "Black Rose",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o título dado ao líder da nação de Ionia em League of Legends?",
    respostas: [
      "Grão-Mestre",
      "Ancião",
      "Elder",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o famoso atirador conhecido por suas flechas congelantes em League of Legends?",
    respostas: [
      "Varus",
      "Ashe",
      "Lucian",
    ],
    correta: 1
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