/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function balanceBST(root) {
    function inOrderTraversal(node, nodes) {
        if (!node) return;
        inOrderTraversal(node.left, nodes);
        nodes.push(node.val);
        inOrderTraversal(node.right, nodes);
    }

    function buildBalancedTree(nodes, start, end) {
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new TreeNode(nodes[mid]);
        node.left = buildBalancedTree(nodes, start, mid - 1);
        node.right = buildBalancedTree(nodes, mid + 1, end);
        return node;
    }

    const nodes = [];
    inOrderTraversal(root, nodes);
    return buildBalancedTree(nodes, 0, nodes.length - 1);
}
