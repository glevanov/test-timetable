export default (n) => {
  if (n > 9) {
    return n.toString();
  }
  return `0${n.toString()}`;
};
