(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const redFruits = ['manzana', 'cereza', 'ciruela'];
    const result = redFruits.includes(fruit);
    return result;
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  function getFruitsByColor(color: string): string[] {
    const fruitsByColor: Record<string, string[]> = {
      red: ['manzana', 'fresa'],
      yellow: ['piña', 'banana'],
      purple: ['moras', 'uvas'],
    };

    console.log('verificando si existe el color en el objeto');
    if (!fruitsByColor.hasOwnProperty(color)) {
      console.error('the color must be: red, yellow, purple');
    }

    const result = fruitsByColor[color];
    return result;
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = false;

  function workingSteps() {
    if (!isFirstStepWorking) return 'First step broken.';
    if (!isSecondStepWorking) return 'Second step broken.';
    if (!isThirdStepWorking) return 'Third step broken.';
    if (!isFourthStepWorking) return 'Fourth step broken.';
    return 'Working properly!';
  }

  // isRedFruit
  // console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  // console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  // console.log(getFruitsByColor('red')); // ['manzana', 'fresa']
  // console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  // console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
