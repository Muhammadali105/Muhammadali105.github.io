window.onload = () => {
    const button = document.querySelector('.button__of__bmi');
    button.addEventListener('click', calculateBmi);
}

function calculateBmi() {
    const name = document.querySelector('#name').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}

        Uh Oh! ${name} Looks like you're so light, you'd need rocks in your pockets on a windy day!`; 

    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}

        Good Job! ${name} Your BMI is so perfectly balanced, even a seesaw would be jealous! `;

    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}

        ${name}, It looks like your main exercise is lifting forks. Maybe time to mix in a few dumbbells? `;

    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}

        ${name}, If calories were cash, you'd be a billionaire! Time to spend some of that wealth at the gym `;

    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}

        ${name}, Your BMI says you're a heavyweight champ. Maybe not in boxing, but definitely in snack lifting. `;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}

        ${name}, Your BMI suggests you're in a long-term relationship with cake. Maybe it's time to 'see other people'... like a treadmill`;
    }
}