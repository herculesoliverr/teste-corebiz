export function formatPrice(value: number): string {
  let formatedValue = value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });

  if(!formatedValue.endsWith("00")) return formatedValue;

  formatedValue = formatedValue.slice(0, formatedValue.length - 3).replace(".", ",");

  let splitString = ((newString: string) => {
      let separeteString = newString.split(",");
      return [separeteString, separeteString[1].slice(0,1), separeteString[1].slice(separeteString[1].length - 2, separeteString[1].length)];
  })(formatedValue);

  let newFormatedValue = `${splitString[0][0]}${splitString[1][0]},${splitString[1]}${splitString[2]}`;

  if(!newFormatedValue.endsWith("0")) return newFormatedValue;

  return newFormatedValue.slice(0, newFormatedValue.length - 1);
}