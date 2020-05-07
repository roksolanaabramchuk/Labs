let PortClass = require('./Port.js')
let ShipClass = require('./Ship.js')
var b = []
class Pier {
    constructor(pierNumber, shipNumber, arrivalTime, departureTime) {
        this.pierNumber = pierNumber
        this.shipNumber = shipNumber
        this.arrivalTime = arrivalTime
        this.departureTime = departureTime
    }

    //Додавання пристані до порту
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

    //Видалення пристані із порту
    static DeletePierFromPort(portNumber) {
        b = PortClass.Port.SearchPort(portNumber)
        if (b.pierNumber === undefined) {
            console.log("Порт не має пристані")
        } else {
            b.pierNumber = undefined
        }

    }

    // Прибуття/Відбуття корабля від пристані
    ArrivalAndDepartureShip(shipNumber) {
        b = ShipClass.Ship.SearchShip(shipNumber)
        if (this.departureTime !== undefined && this.shipNumber === b.shipNumber) {
            console.log("Корабель номер", shipNumber, "прибув до пристані номер", this.pierNumber, this.arrivalTime, "і відбув", this.departureTime)
        } else if (this.arrivalTime !== undefined && this.shipNumber === b.shipNumber) {
            console.log("Корабель номер", shipNumber, "прибув до пристані номер", this.pierNumber, this.arrivalTime, "але ще не відбув")
        } else if (this.shipNumber !== b.shipNumber) {
            console.log("Корабель номер", shipNumber, "не прибував до пристані номер", this.pierNumber)
        }
    }

    // Пошук усіх кораблів на пристані
    SearchAllShipsPies() {
        var count = 0
        for (var i in ShipClass.ShipCollection) {
            if (ShipClass.ShipCollection[i].pierNumber === this.pierNumber) {
                console.log(ShipClass.ShipCollection[i])
                count++
            }
        }
        if (count === 0) {
            console.log('Кораблів на пристані номер', this.pierNumber, 'немає')
        }
    }

}
module.exports = { Pier }