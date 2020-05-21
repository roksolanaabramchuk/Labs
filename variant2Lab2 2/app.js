const express = require('express');
const pug = require('pug');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded());


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'static', 'views'));

class Port {
    constructor(name, country, EDP, address, pier) {
        this.name = name;
        this.country = country;
        this.EDP = EDP;
        this.address = address;
        this.pier = pier;
    }
}

class Ship {
    constructor(name, number, country, tonnage, log) {
        this.name = name;
        this.number = number;
        this.country = country;
        this.tonnage = tonnage;
        this.log = log;
    }
}

class Pier {
    constructor(name, number, Capacity) {
        this.name = name;
        this.number = number;
        this.Capacity = Capacity;
    }
}

class Log {
    constructor(pier, timeArrival, timeDeparture) {
        this.pier = pier;
        this.timeArrival = timeArrival;
        this.timeDeparture = timeDeparture;
    }
}

class ShipOnPier {
    constructor(ship, pier) {
        this.ship = ship;
        this.pier = pier;
    }
}

let ShipOnPiers = [new ShipOnPier([69, 22], 22), new ShipOnPier([999], 2)]

let ports = [new Port('Maria', 'Germany', 2234, 'Molodizna 2', [22]),
    new Port('San Via', 'USA', 1124, 'San Francisco 2', []),
    new Port('Diego', 'Italy', 5647, 'bi polar 2', [])
]

let ships = [
    new Ship('69', 69, 'Germany', 45, [
        new Log(14, new Date(2019, 12, 30), new Date(2020, 3, 17)),
        new Log(22, new Date(2020, 4, 30), new Date(2020, 8, 17))
    ]),

    new Ship('Biar', 22, 'Urugvai', 12, [
        new Log(14, new Date(2019, 12, 30), new Date(2020, 3, 17)),
        new Log(2, new Date(2020, 4, 30), new Date(2020, 8, 17))
    ]),
    new Ship('Hope', 999, "China", 2, [
        new Log(22, new Date(2017, 12, 30), new Date(2028, 3, 17)),
        new Log(2, new Date(2018, 4, 30), new Date(2019, 8, 17))
    ])
]

let piers = [new Pier('Morgen', 22, 3), new Pier('Peep', 14, 5),
    new Pier('Juis', 2, 1)
]
let AllMatherPiers = JSON.stringify(piers)
AllMatherPiers = JSON.parse(AllMatherPiers)

let allPiers = [];

app.get('/', (req, res) => {
    ports.forEach(value => {
        value.pier.forEach(pier => {
            piers.forEach((numb, index) => {
                if (pier === numb.number) {
                    let zm = piers.splice(index, 1)
                    allPiers.push(zm[0])
                    return
                }
            })
        })
    })
    console.log(AllMatherPiers);
    res.render('pages/index', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
});
app.get('/ports', (req, res) => {
    res.render('pages/ports', { data: ports })
})
app.get('/ships', (req, res) => {
    res.render('pages/ships', { dataShip: ships })
})
app.get('/piers', (req, res) => {
    res.render('pages/piers', { data: AllMatherPiers })
})


app.get('/shop', function(request, response) {
    response.render('pages/shop', { title: 'Shop' })
});

app.get('/workPorts', (req, res) => {
        res.render('pages/workPort', {
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers
        })
    })
    //Додавання нового порту в колекцію
app.post('/addPort', (req, res) => {
    let body = req.body;

    let newPort = new Port(body.name, body.Country, +body.EDP, body.address, []);
    let go = false;

    ports.filter(value => {
        if (newPort.EDP === value.EDP) {
            console.log(333333333);
            go = true;

        }
    })
    console.log(go);

    if (!go) {
        ports.push(newPort)
        res.render('pages/ports', {
            verify: 'Порт успішно доданий!',
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers
        })

    } else {
        res.render('pages/workPort', {
            verify: 'Порт не доданий! Перевірте ЄДЕРПОУ',
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers
        })
    }
})


//Редагування порту в колекції
app.post('/editPort', (req, res) => {
    let body = req.body;
    let index = body.index[0]
    console.log(ports[index]);
    ports[index] = new Port(body.name, body.Country, ports[index].EDP, body.address);


    res.render('pages/workPort', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        newText: `Порт успішно проредагованно!`,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})

//Видалення порту з колекції
app.post('/deletePort', (req, res) => {
    let body = req.body;
    let index = body.index[0]
    console.log(ports[index]);
    ports.splice(index, 1)


    res.render('pages/workPort', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        newDelete: `Порт успішно видалено!`,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})

//Пошук одного порту в колекції
app.post('/findPort', (req, res) => {
    let body = req.body;
    let findPort = ports.find(value => {
        return value.name === body.name
    })

    console.log(findPort);

    if (findPort !== undefined) res.render('pages/workPort', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        newFind: `Порт ${JSON.stringify(findPort)} успішно Знайдено!`,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
    else res.render('pages/workPort', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        newFind: `Порт ${body.name} не Знайдено!`,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})

app.get('/workShips', (req, res) => {
    res.render('pages/workShip', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
})

//Додавання корабля в колекцію
app.post('/addShip', (req, res) => {
    let body = req.body;
    let newShip = new Ship(body.name, +body.number, body.country, +body.tonnage);


    let trust = ships.find(value => {
        return value.number === newShip.number
    })

    if (trust !== undefined) res.render('pages/workShip', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        verifyShip: `Корабель не додано! Перевірте номер корабля`,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
    else {
        ships.push(newShip);
        res.render('pages/workShip', {
            data: ports,
            dataShip: ships,
            dataPier: piers,
            verifyShip: `Корабель успішно додано!`,
            allPiers: allPiers,
            piers: AllMatherPiers
        })
    }

})


//Редагування корабля в колекції
app.post('/editShip', (req, res) => {
    let body = req.body;
    let index = body.index[0]
    console.log(ships[index]);

    ships[index] = new Ship(body.name, ships[index].number, body.country, body.tonnage);


    res.render('pages/workShip', {
        newText: `Корабель успішно проредагованно!`,
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})


//Видалення корабля з колекції
app.post('/deleteShip', (req, res) => {
    let body = req.body;
    let index = body.index[0]
    console.log(ports[index]);
    ships.splice(index, 1)


    res.render('pages/workShip', {
        deleteText: `Корабель успішно видалено!`,
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})


//Пошук одного корабля в колекції
app.post('/findShip', (req, res) => {
    let body = req.body;
    let findShip = ships.find(value => {
        return value.name === body.name
    })

    console.log(findShip);

    if (findShip !== undefined) res.render('pages/workShip', {
        newFindShip: `Корабель ${JSON.stringify(findShip)} успішно Знайдено!`,
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
    else res.render('pages/workShip', {
        newFindShip: `Корабель ${body.name} не Знайдено!`,
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})

app.get('/workPortsAndShips', (req, res) => {
    res.render('pages/workPortsAndShips', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })

})

//Додавання пристані до порту
app.post('/addPier', (req, res) => {
    let body = req.body;
    let indexPort = body.indexPort[0]
    let indexPier = body.indexPier[0]



    ports[indexPort].pier.push(piers[indexPier].number)
    allPiers.push(piers.splice(indexPier, 1)[0])

    res.render('pages/workPortsAndShips', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
})

//Видалення пристані із порту
app.post('/deletePier', (req, res) => {
    let body = req.body;
    let indexPort = body.indexPort[0]
    let indexPier = body.indexPier[0]

    ports[indexPort].pier.forEach((value, i) => {
        if (allPiers[indexPier].number === value) {
            piers.push(allPiers[indexPier])
            allPiers.splice(indexPier, 1)
            ports[indexPort].pier.splice(i, 1)
            res.render('pages/workPortsAndShips', {
                data: ports,
                dataShip: ships,
                dataPier: piers,
                allPiers: allPiers,
                viktory: 'пристань успішно видалена з порту',
                piers: AllMatherPiers
            })
        } else {
            res.render('pages/workPortsAndShips', {
                data: ports,
                dataShip: ships,
                dataPier: piers,
                allPiers: allPiers,
                viktory: '0-0=0',
                piers: AllMatherPiers
            })
        }

    })



})

app.get('/report', (req, res) => {
    res.render('pages/report', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        piers: AllMatherPiers
    })
})

//Прибуття/Відбуття корабля від пристані
app.post('/time', (req, res) => {
    let body = req.body;
    let indexShip = body.indexShips[0]
    let show = true

    let info = ships[indexShip].log;

    res.render('pages/report', {
        data: ports,
        dataShip: ships,
        dataPier: piers,
        allPiers: allPiers,
        show: show,
        info: info,
        piers: AllMatherPiers
    })
})

//Звіт кораблів усіх кораблів на заданій пристані
app.post('/allSP', (req, res) => {
    let body = req.body;
    let indexPier = body.indexPier[0]

    let allShips = [];
    let pier = ShipOnPiers.filter(value => {

        return value.pier === AllMatherPiers[indexPier].number
    })

    if (pier.length === 1) {
        allShips = pier[0].ship
        console.log(pier[0].ship);
        res.render('pages/report', {
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers,
            hope: 'На даній пристані є кораблі',
            allShips: allShips,
            endShow: true
        })
    } else {
        res.render('pages/report', {
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers,
            hope: 'На даній пристані немає кораблів'
        })
    }
})

//Звіт про розміщення кораблів на пристанях заданого порту
app.post('/report', (req, res) => {
    let body = req.body;
    let indexPort = body.last[0]

    let allShips = [];


    if (ports[indexPort].pier.length >= 1) {
        ports[indexPort].pier.forEach(value => {
            ShipOnPiers.forEach(pier => {
                if (pier.pier === value) allShips.push(pier.ship)
            })
        })
    }

    allShips = allShips.flat(2)
    console.log(allShips);

    if (allShips.length >= 1) {
        res.render('pages/report', {
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers,
            lastport: ports[indexPort].name,
            lastInfo: allShips,
            lastShow: true,
            lastChec: true
        })
    } else {
        res.render('pages/report', {
            data: ports,
            dataShip: ships,
            dataPier: piers,
            allPiers: allPiers,
            piers: AllMatherPiers,
            lastport: ports[indexPort].name,
            lastShow: false
        })
    }



})

app.listen(3002, () => {
    console.log(3000)
});