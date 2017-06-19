export default (seconds) => value => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), seconds * 1000);
  });
}
