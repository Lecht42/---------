class HashTable {
    constructor(size = 8) {
        this.size = size;
        this.count = 0;
        this.table = Array(size).fill(null);
        this.keys = Array(size).fill(null);
    }

    _hash(key, attempt) {
        const hash1 = this._primaryHash(key);
        const hash2 = this._secondaryHash(key);
        return (hash1 + attempt * hash2) % this.size;
    }

    _primaryHash(key) {
        return key.toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.size;
    }

    _secondaryHash(key) {
        return 1 + (key.toString().split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % (this.size - 1));
    }

    _rehash() {
        const oldTable = this.table;
        const oldKeys = this.keys;
        this.size *= 2;
        this.count = 0;
        this.table = Array(this.size).fill(null);
        this.keys = Array(this.size).fill(null);

        for (let i = 0; i < oldKeys.length; i++) {
            if (oldKeys[i] !== null) {
                this.add(oldKeys[i], oldTable[i]);
            }
        }
    }

    add(key, value) {
        if (this.count / this.size > 0.7) {
            this._rehash();
        }

        let attempt = 0;
        let index;
        do {
            index = this._hash(key, attempt);
            if (this.keys[index] === null || this.keys[index] === key) {
                this.table[index] = value;
                this.keys[index] = key;
                if (this.keys[index] === null) this.count++;
                return;
            }
            attempt++;
        } while (attempt < this.size);

        throw new Error("HashTable is full!");
    }

    get(key) {
        let attempt = 0;
        let index;
        do {
            index = this._hash(key, attempt);
            if (this.keys[index] === null) return null;
            if (this.keys[index] === key) return this.table[index];
            attempt++;
        } while (attempt < this.size);

        return null;
    }

    remove(key) {
        let attempt = 0;
        let index;
        do {
            index = this._hash(key, attempt);
            if (this.keys[index] === null) return;
            if (this.keys[index] === key) {
                this.keys[index] = null;
                this.table[index] = null;
                this.count--;
                return;
            }
            attempt++;
        } while (attempt < this.size);
    }

    display() {
        return this.keys.map((key, index) => ({
            key,
            value: this.table[index]
        })).filter(entry => entry.key !== null);
    }
}

window.HashTable = HashTable;
