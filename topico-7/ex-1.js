function calcularArea(base, altura) {
    return (base * altura) / 2;
}

const calcularAreaArrow = (base, altura) => (base * altura) / 2;

function cumprimentar(nome, periodo) {
    return "Boa " + periodo + ", " + nome + "!"
}

const cumprimentarArrow = (nome, periodo) => "Boa " + periodo + ", " + nome + "!";

console.log(calcularArea(7, 4));
console.log(calcularAreaArrow(7,4));

console.log(cumprimentarArrow("Vampeta", "tarde"));
console.log(cumprimentar("Vampeta", "tarde"));