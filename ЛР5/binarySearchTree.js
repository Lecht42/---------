class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key, value) {
        const newNode = new TreeNode(key, value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    search(key) {
        return this._searchNode(this.root, key);
    }

    _searchNode(node, key) {
        if (!node) return null;
        if (key < node.key) return this._searchNode(node.left, key);
        else if (key > node.key) return this._searchNode(node.right, key);
        else return node.value;
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
        return node;
    }

    findMin() {
        const minNode = this._findMinNode(this.root);
        return minNode ? { key: minNode.key, value: minNode.value } : null;
    }

    _findMinNode(node) {
        while (node && node.left) {
            node = node.left;
        }
        return node;
    }

    findMax() {
        let node = this.root;
        while (node && node.right) {
            node = node.right;
        }
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

        while (queue.length > 0) {
            const node = queue.shift();
            result.push({ key: node.key, value: node.value });
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    }

    getHeight() {
        return this._getHeight(this.root);
    }

    _getHeight(node) {
        if (!node) return -1; 
        const leftHeight = this._getHeight(node.left);
        const rightHeight = this._getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

window.BinarySearchTree = BinarySearchTree;
