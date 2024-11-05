class Set {
    constructor() {
        this.items = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.items.push(value);
        }
    }

    delete(value) {
        const index = this.items.indexOf(value);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    has(value) {
        return this.items.includes(value);
    }

    size() {
        return this.items.length;
    }

    values() {
        return [...this.items];
    }
}

window.Set = Set;
