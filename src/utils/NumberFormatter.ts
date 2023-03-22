const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
});

export function currency(value: number) {
  return formatter.format(value);
}
