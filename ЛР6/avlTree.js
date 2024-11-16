class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        this.root = this._insertNode(this.root, key, value);
    }

    _insertNode(node, key, value) {
        if (!node) return new TreeNode(key, value);
        if (key < node.key) {
            node.left = this._insertNode(node.left, key, value);
        } else if (key > node.key) {
            node.right = this._insertNode(node.right, key, value);
        } else {
            node.value = value;
            return node;
        }
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        return this._balance(node);
    }

    delete(key) {
        this.root = this._deleteNode(this.root, key);
    }

    _deleteNode(node, key) {
        if (!node) return null;
        if (key < node.key) {
            node.left = this._deleteNode(node.left, key);
        } else if (key > node.key) {
            node.right = this._deleteNode(node.right, key);
        } else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            const minNode = this._findMinNode(node.right);
            node.key = minNode.key;
            node.value = minNode.value;
            node.right = this._deleteNode(node.right, minNode.key);
        }
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        return this._balance(node);
    }

    search(key) {
        return this._searchNode(this.root, key);
    }

    _searchNode(node, key) {
        if (!node) return null;
        if (key < node.key) return this._searchNode(node.left, key);
        else if (key > node.key) return this._searchNode(node.right, key);
        return node.value;
    }

    findMin() {
        const node = this._findMinNode(this.root);
        return node ? { key: node.key, value: node.value } : null;
    }

    _findMinNode(node) {
        while (node && node.left) node = node.left;
        return node;
    }

    findMax() {
        let node = this.root;
        while (node && node.right) node = node.right;
        return node ? { key: node.key, value: node.value } : null;
    }

    inOrderTraversal() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        return result;
    }

    _inOrderTraversal(node, result) {
        if (node) {
            this._inOrderTraversal(node.left, result);
            result.push({ key: node.key, value: node.value });
            this._inOrderTraversal(node.right, result);
        }
    }

    breadthFirstTraversal() {
        const result = [];
        const queue = [];
        if (this.root) queue.push(this.root);
        while (queue.length) {
            const node = queue.shift();
            result.push({ key: node.key, value: node.value });
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }

    _balance(node) {
        const balanceFactor = this._getBalance(node);
        if (balanceFactor > 1) {
            if (this._getBalance(node.left) < 0) {
                node.left = this._rotateLeft(node.left);
            }
            return this._rotateRight(node);
        }
        if (balanceFactor < -1) {
            if (this._getBalance(node.right) > 0) {
                node.right = this._rotateRight(node.right);
            }
            return this._rotateLeft(node);
        }
        return node;
    }

    _rotateLeft(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
        return newRoot;
    }

    _rotateRight(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;
        node.height = 1 + Math.max(this._getHeight(node.left), this._getHeight(node.right));
        newRoot.height = 1 + Math.max(this._getHeight(newRoot.left), this._getHeight(newRoot.right));
        return newRoot;
    }

    _getHeight(node) {
        return node ? node.height : 0;
    }

    _getBalance(node) {
        return node ? this._getHeight(node.left) - this._getHeight(node.right) : 0;
    }
}

window.AVLTree = AVLTree;
