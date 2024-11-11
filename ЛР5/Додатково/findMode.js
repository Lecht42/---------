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
 * @return {number[]}
 */
function findMode(root) {
    let currentVal = null;
    let currentCount = 0;  
    let maxCount = 0;      
    const modes = [];     

    function handleValue(val) {
        if (val !== currentVal) {
            currentVal = val;
            currentCount = 0;
        }
        currentCount++;

        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes.length = 0; 
            modes.push(val);
        } else if (currentCount === maxCount) {
            modes.push(val);
        }
    }

    function inOrder(node) {
        if (!node) return;
        inOrder(node.left);
        handleValue(node.val);
        inOrder(node.right);
    }

    inOrder(root);
    return modes;
}
