const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

const upperName = function (name) {
  return name.toUpperCase();
};

const lowerName = () => {};

console.log(upperName('Felipe'));

function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
console.log(fruta2);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

document.addEventListener('click', handleMouse);
