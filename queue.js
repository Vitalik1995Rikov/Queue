class Queue {
    constructor() {
        this.storage = [];
    }
    push(value) {
        this.storage.push(value) // добавить элемент в конец
    }

    shift() {
        this.storage.shift() // удалить первый элемент
    }

    length() {
        return this.storage.length // получить количество элементов
    }
}

let log = console.log;
log.apply(console, arguments); // чтоб собирал все, что выводится