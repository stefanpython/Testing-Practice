const capitalize = (word) => {
  const str = word.charAt(0).toUpperCase() + word.slice(1);

  return str;
};

module.exports = capitalize;
