var formatDistance = require("date-fns/formatDistance"); //our new technology/package

module.exports = {
  format_distance: () => {
    //gives the difference between today "()" and date of event, here displayed as (2023,6,1)
    const result = formatDistance(new Date(), new Date(2023, 6, 1));
    return result;
  },
};
