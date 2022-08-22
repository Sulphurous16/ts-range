export const range = (start :number, stop :number, skip :number = 1) => {
  let arr :number[] = [];
  for (let i :number = start; i < stop; i += skip) {
    arr.push(i);
  }
  return arr;
}