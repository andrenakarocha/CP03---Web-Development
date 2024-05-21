const texto = document.querySelector('#texto')
const titulo = document.querySelector('#titulo')
const resultado = document.querySelector('#resultado')

function notas () { 
    let nome = prompt('Digite o nome do aluno: ')
    let nota1 = Number(prompt('Digite a primeira nota do aluno: '))
    let nota2 = Number(prompt('Digite a segunda nota do aluno: '))

    let media = (nota1 + nota2) / 2

    titulo.innerText = `Analisando a situação de ${nome}`
    texto.innerText = `Com as notas ${nota1} e ${nota2}, a média é ${media}`

    if (media < 3) {
        resultado.innerHTML = `<p>Com a média abaixo de 3, o aluno está <span>REPROVADO</span></p>`
        let span = document.querySelector('span')
        span.style.backgroundColor = 'red'
        
    }

    else if (media > 6) {
        resultado.innerHTML = `<p>Com a média acima de 6, o aluno está <span>APROVADO</span></p>`
        let span = document.querySelector('span')
        span.style.backgroundColor = 'green'
    }

    else {
        resultado.innerHTML = `<p>Com a média acima de 3 e abaixo de 6, o aluno está de <span>RECUPERAÇÃO</span></p>`
        let span = document.querySelector('span')
        span.style.backgroundColor = 'yellow'
    }
}

