module.exports = {
  test(val) {
    return val instanceof String;
  },
  print(val) {
    return JSON.stringify(val);
  },
}
