module.exports.getGreeting = function (name) {
  let hour = new Date().getHours();
  if (hour >= 17) {
    return `Добрый вечер, ${name}`;
  } else if (hour >= 12) {
    return `Добрый день, ${name}`;
  } else {
    return `Доброе утро, ${name}`;
  }
};
