/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode[]} trees
 * @return {TreeNode}
 */
var canMerge = function(trees) {
    const rootMap = new Map();
    const childSet = new Set();
    for (const tree of trees) {
        rootMap.set(tree.val, tree);
    }
    for (const tree of trees) {
        if (tree.left && tree.left.left === null && tree.left.right === null) {
            childSet.add(tree.left.val);
        }
        if (tree.right && tree.right.left === null && tree.right.right === null) {
            childSet.add(tree.right.val);
        }
        if (tree.left === null && tree.right === null) {
            childSet.add(tree.val);
        }
    }
    const candidates = [];
    for (const tree of trees) {
        if (!childSet.has(tree.val)) {
            candidates.push(tree);
        }
    }
    if (candidates.length !== 1) return null;
    const root = candidates[0];
    rootMap.delete(root.val);
    function merge(node) {
        if (node.left === null && node.right === null) {
            if (rootMap.has(node.val)) {
                const subtree = rootMap.get(node.val);
                node.left = subtree.left;
                node.right = subtree.right;
                rootMap.delete(node.val);
            }
        }
        if (node.left !== null) {
            merge(node.left);
        }
        if (node.right !== null) {
            merge(node.right);
        }
    }
    merge(root);
    if (rootMap.size > 0) return null;
    function isValidBST(node, lower = -Infinity, upper = Infinity) {
        if (node === null) return true;
        if (node.val <= lower || node.val >= upper) return false;
        return isValidBST(node.left, lower, node.val) && isValidBST(node.right, node.val, upper);
    }
    if (!isValidBST(root)) return null;
    return root;
};
