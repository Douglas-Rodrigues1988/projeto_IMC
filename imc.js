document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imcForm');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Captura os valores de entrada
        const nome = document.getElementById('nome').value;
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        // Validação
        if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
            resultadoDiv.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos corretamente.</p>';
            resultadoDiv.style.display = 'block';
            return;
        }

        // Cálculo do IMC
        const imc = peso / (altura * altura);
        let classificacao;

        // Classificação do IMC
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobrepeso';
        } else {
            classificacao = 'Obesidade';
        }

        // Exibe o resultado
        resultadoDiv.innerHTML = `<p>Olá,  ${nome}! Seu IMC é de: <strong>${imc.toFixed(2)}</strong>, o que significa que você está: ${classificacao}.</p>`;
        resultadoDiv.style.display = 'block';
    });
});
