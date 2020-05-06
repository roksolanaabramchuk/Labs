var PortCollection = []
class Port {
    constructor(portNumber, portName, pierNumber) {
        this.portNumber = portNumber
        this.portName = portName
        this.pierNumber = pierNumber
    }

    // Додавання нового порту в колекцію
    AddPort() {
        PortCollection.push(this)
    }

    // Редагування порту в колекції
    EditingPort(portNumber, portName, pierNumber) {
        this.portNumber = portNumber
        this.portName = portName
        this.pierNumber = pierNumber
    }

    // Видалення порту з колекції
    DeletePort() {
        for (var i in this) {
            delete this[i]
        }
    }

    // Пошук одного порту в колекції
    static SearchPort(portNumber) {
        let count = 0
        for (let i in PortCollection) {
            if (PortCollection[i].portNumber === portNumber) {
                return PortCollection[i]
                count++
            }
        }
        if (count === 0) {
            return ('Такий порт відсутній')
        }
    }

}
module.exports = { Port, PortCollection }