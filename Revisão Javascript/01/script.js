function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}
showList('Google', 'Andre', 'Rafael', 'Felipe');

const numeros = [10, 5, 20];
const maior = Math.max(...numeros);
console.log(maior);

const numeros2 = [13, ...numeros, 24, 32, 45];
console.log(numeros2);

const carro = {
  cor: 'Azul',
  portas: 4,
};

carroAno = { ...carro, ano: 2008 };

console.log(carroAno);
