export function GenerateOrderCode() {
  const prefix: string = 'TK-';
  const randomNumber: number = Math.floor(Math.random() * 1000000);
  const formattedNumber: string = randomNumber.toString().padStart(6, '0');
  return prefix + formattedNumber;
}
