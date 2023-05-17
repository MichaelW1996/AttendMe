var formatDistance = require('date-fns/formatDistance')

module.exports = {
   
    format_distance: () => {
        const result = formatDistance(new Date(), new Date(2023, 6, 1))
        return result
    }
}
  