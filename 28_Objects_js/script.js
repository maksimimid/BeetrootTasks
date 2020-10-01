// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
    manufacturer: 'Mazda',
    model: 'M6',
    year: '2014',
    mean_speed: '100',
    info: function () {
        return `Manufacturer: ${this.manufacturer}, Model: ${this.model}, Year: ${this.model}, Mean speed: ${this.mean_speed}`
    },
    get_time: function (km) {
        return km / this.mean_speed + Math.floor((km / this.mean_speed) / 4)
    }

}

console.log(car.info())
console.log(car.get_time(1000))


// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.

let operations = {
    numerator: 1,
    denominator: 1,
    merge: function () {
        return this.numerator + this.denominator
    },
    dissolve: function () {
        return this.numerator - this.denominator
    },
    multiply: function () {
        return this.numerator * this.denominator
    },
    divide: function () {
        return this.numerator / this.denominator
    },
    get delNumerator() {
        this.numerator = 0
    },
    get delDenominator() {
        this.denominator = 0
    }


}

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15»,
//  а не «20:30:75».

var date = new Date();

var time_stamp = {

    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),

    print_time: function () {
        console.log(`Current time: ${('0' + this.hour).slice(-2)}:${('0' + this.minute).slice(-2)}:${('0' + this.second).slice(-2)}`)
    },

    setseconds: function (x) {
        if (x > 59) {
            this.setminutes(Math.trunc(x / 60))
            x = x - Math.trunc(x / 60) * 60
        }

        this.second += x;
        if (this.second > 59) {
            this.second -= 60
            this.setminutes(1)

        }
    },

    setminutes: function (x) {

        if (x > 59) {
            this.sethours(Math.trunc(x / 60))
            x = x - Math.trunc(x / 60) * 60
        }

        this.minute += x;
        if (this.minute > 59) {
            this.minute -= 60
            this.sethours(1)
        }
    },

    sethours: function (x) {
        if (x > 23) {
            x = x - Math.trunc(x / 24) * 24
            this.hour += x;
        }

        if (this.hour > 23) {
            this.hour -= 24
        }

    },


};