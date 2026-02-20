let veiculo = {
    marca: "BMW", 
    modelo: "M3", 
    ano: 2025, 
    disponivel: true
};

console.log(veiculo.marca, veiculo.modelo)
console.log(veiculo["ano"], veiculo["disponivel"])

veiculo["cor"] = "Azul"
console.log(veiculo["cor"])