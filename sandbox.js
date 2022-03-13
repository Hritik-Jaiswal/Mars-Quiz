const correctAnswers = ['C', 'B', 'B', 'C', 'B', 'A', 'B', 'B', 'A', 'B', 'A', 'C', 'A', 'C', 'D'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const result = document.querySelector('.result');
    let userScore = document.querySelector('.user-score');
    let score = 0;

    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value];

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score+= 6.66;
        }
        
        scrollTo(0,0);
        result.classList.toggle('d-none');
        
        let scoreCounting = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${Math.round(scoreCounting)}%`;
            if(scoreCounting === Math.round(score)){
                clearInterval(timer);
            } else{
                scoreCounting++;
            }
        }, 50);

    })
});