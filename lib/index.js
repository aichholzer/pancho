'use strict';


module.exports = (min, max) => {

    min = min || 1;

    if (typeof min === 'string') {
        const parsedMin = parseFloat(min);
        switch (min.match(/(millisecond|second|minute|hour|day)/i)[0]) {
            case 'second': min = parsedMin * 1000;
                break;
            case 'minute': min = parsedMin * 1000 * 60;
                break;
            case 'hour': min = parsedMin * 1000 * 60 * 60;
                break;
            case 'day': min = parsedMin * 1000 * 60 * 60 * 24;
                break;
            case 'millisecond':
            default: min = parsedMin;
        }

        max = min;
    } else if (typeof min === 'number') {
        min *= 1000;
        max = max ? max * 1000 : min;
    }

    const lapse = Math.floor(Math.random() * (max - min + 1) + min);
    return new Promise(yes => {
        setTimeout(() => yes(lapse), lapse);
    });
};
