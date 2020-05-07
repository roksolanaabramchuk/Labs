var ShipCollection = []
class Ship {
    constructor(shipNumber, shipName, pierNumber) {
        this.shipNumber = shipNumber
        this.shipName = shipName
        this.pierNumber = pierNumber
    }

    // Додавання корабля в колекцію
    AddShip() {
        ShipCollection.push(this)
    }

    // Редагування корабля в колекції
    EditingShip(shipNumber, shipName, pierNumber) {
        this.shipNumber = shipNumber
        this.shipName = shipName
        this.pierNumber = pierNumber
    }

    // Видалення корабля з колекції
    DeleteShip() {
        for (var i in this) {
            delete this[i]
        }
    }

    // Пошук одного корабля в колекції
    static SearchShip(shipNumber) {

        let count = 0
        for (let i in ShipCollection) {
            if (ShipCollection[i].shipNumber === shipNumber) {
                return ShipCollection[i]
                count++
            }
        }
        if (count === 0) {
            return ('Такий корабель відсутній')
        }
    }

}
module.exports = { Ship, ShipCollection }