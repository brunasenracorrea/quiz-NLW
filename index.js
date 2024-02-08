const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para criar uma função em JavaScript?",
      respostas: [
        "function: myFunction()",
        "function = myFunction()",
        "function myFunction()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "int",
        "variable",
        "var",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método de array é usado para remover o último elemento?",
      respostas: [
        "pop()",
        "removeLast()",
        "deleteLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "===",
        "==",
        "=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.log()",
        "log()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o tipo de dados que representa um conjunto de valores verdadeiro ou falso?",
      respostas: [
        "boolean",
        "string",
        "number",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseInteger()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico 'ou' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para concatenar dois arrays em JavaScript?",
      respostas: [
        "join()",
        "merge()",
        "concat()",
      ],
      correta: 2
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