/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];

    function traverse(node) {
        if (!node) {
            result.push('null'); 
            return;
        }
        result.push(node.val.toString());
        traverse(node.left);              
        traverse(node.right);             
    }

    traverse(root);
    return result.join(','); 
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const values = data.split(','); 
    let index = 0;

    function buildTree() {
        if (values[index] === 'null') { 
            index++;
            return null;
        }

        const node = new TreeNode(parseInt(values[index]));
        index++;
        node.left = buildTree();  
        node.right = buildTree(); 

        return node;
    }

    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
