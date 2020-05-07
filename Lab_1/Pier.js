let PortClass = require('./Port.js')
class Pier {
    constructor(pierNumber, shipNumber, arrivalTime, departureTime) {
        this.pierNumber = pierNumber
        this.shipNumber = shipNumber
        this.arrivalTime = arrivalTime
        this.departureTime = departureTime
    }

    // Додавання пристані до порту
    AddPierToPort(portNumber) {
        let count = 0
        for (let i in PortClass.PortCollection) {
            if (PortClass.PortCollection[i].portNumber === portNumber) {
                if (PortClass.PortCollection[i].pierNumber === undefined) {
                    PortClass.PortCollection[i].pierNumber = this.pierNumber
                } else {
                    return ('Даний порт уже має пристань')
                }
                count++
            }
        }
        if (count === 0) {
            return ('Такий порт відсутній')
        }

    }
}
module.exports = { Pier }