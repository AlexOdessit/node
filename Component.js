class Component {
  render() {
    return 'File is rendered';
  }
}

export default Component;

//Именный export
export const calcFunc = (operator) => {
  let sign = operator;
  const calcOperation = (...numbers) => {
    const filtered = numbers.filter((num) => num !== 0);

    if (sign === '+')
      return numbers.reduce((accumulator, num) => accumulator + num);
    if (sign === '-')
      return numbers.reduce((accumulator, num) => accumulator - num);
    if (sign === '*')
      return numbers.reduce((accumulator, num) => accumulator * num);

    if (sign === '/') {
      return filtered.reduce((accumulator, num) => accumulator / num);
    }
  };

  return calcOperation;
};

try {
  const result = calcFunc('/');
  console.log(result(12, 6, 5, 7, 0));
} catch (e) {
  console.log(e.message);
}
