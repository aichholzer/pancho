module.exports = (min = 1, max) => {
  let minValue = min;
  let maxValue;

  if (typeof minValue === 'string') {
    const parsedMin = parseFloat(minValue);
    switch (minValue.match(/(millisecond|second|minute|hour|day)/i)[0]) {
      case 'second':
        minValue = parsedMin * 1000;
        break;
      case 'minute':
        minValue = parsedMin * 1000 * 60;
        break;
      case 'hour':
        minValue = parsedMin * 1000 * 60 * 60;
        break;
      case 'day':
        minValue = parsedMin * 1000 * 60 * 60 * 24;
        break;
      case 'millisecond':
      default:
        minValue = parsedMin;
    }

    maxValue = minValue;
  } else if (typeof minValue === 'number') {
    minValue *= 1000;
    maxValue = max ? max * 1000 : minValue;
  }

  const lapse = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  return new Promise((yes) => setTimeout(yes.bind(null, lapse), lapse));
};
