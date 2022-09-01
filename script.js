
let questions = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
    {
    'que': 'When was JavaScript invented?',
    'a': '1997',
    'b': '1999',
    'c': '1995',
    'd': 'none of the above',
    'correct': 'c'
    },
    {
    'que': 'What does CSS stands for?',
    'a': 'Cascade Style Script',
    'b': 'Console Style Sheet',
    'c': 'Cache Script Sheet',
    'd': 'Cascading Style Sheet',
    'correct': 'd'
    }
]
let index = 0;
let total = questions.length
let right = 0
let wrong = 0
const queBox = document.getElementById('queBox')
const optionRadio = document.querySelectorAll('.options')

const loadQuestion =() =>{
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = questions[index]
    queBox.innerText = `${index+1}) ${data.que} `
    optionRadio[0].nextElementSibling.innerText = data.a;
    optionRadio[1].nextElementSibling.innerText = data.b;
    optionRadio[2].nextElementSibling.innerText = data.c;
    optionRadio[3].nextElementSibling.innerText = data.d;

}
const submitQuestion = () =>{
    const data = questions[index]
    const ans = getAnswer()
    if(ans == data.correct){
        right++
    }
    else{
        wrong++
    }
    index++
    loadQuestion()
    return
}
const getAnswer = () =>{
    let ans;
    optionRadio.forEach((input)=>{
        if(input.checked){
            ans = input.value
        }
    })
    return ans
}
const reset =() =>{
        optionRadio.forEach((input)=>{
           return input.checked = false
        })
    }
const endQuiz =() =>{
    document.getElementById('box').innerHTML = `
    <div style="text-align:center;">
    <h3>Thank You for Playing the Quiz</h3>
    <h2>${right}/${total} 
    are correct</h2>
    </div>
    `
}
//initial call
loadQuestion()
