/**
 * @param {string} expression
 * @return {number}
 */
function evaluate(expression) {
    const parseToken = (expr, index) => {
        while (index < expr.length && expr[index] === ' ') {
            index++;
        }
        if (expr[index] === '(') {
            let start = index;
            let count = 0;
            while (index < expr.length) {
                if (expr[index] === '(') count++;
                if (expr[index] === ')') count--;
                index++;
                if (count === 0) break;
            }
            return { token: expr.substring(start, index), index };
        } else {
            let start = index;
            while (index < expr.length && expr[index] !== ' ' && expr[index] !== ')') {
                index++;
            }
            return { token: expr.substring(start, index), index };
        }
    };

    const evaluateExpression = (expr, scope) => {
        expr = expr.trim();
        if (expr[0] !== '(') {
            if (/^-?\d+$/.test(expr)) {
                return parseInt(expr, 10);
            }
            for (let i = scope.length - 1; i >= 0; i--) {
                if (expr in scope[i]) {
                    return scope[i][expr];
                }
            }
            throw new Error(`Undefined variable: ${expr}`);
        }

        let tokens = [];
        let index = 1;
        while (index < expr.length - 1) {
            let { token, index: newIndex } = parseToken(expr, index);
            tokens.push(token);
            index = newIndex;
            while (index < expr.length && expr[index] === ' ') {
                index++;
            }
        }

        let operation = tokens[0];
        if (operation === 'add') {
            return evaluateExpression(tokens[1], scope) + evaluateExpression(tokens[2], scope);
        } else if (operation === 'mult') {
            return evaluateExpression(tokens[1], scope) * evaluateExpression(tokens[2], scope);
        } else if (operation === 'let') {
            let newScope = { ...scope[scope.length - 1] };
            scope.push(newScope);
            for (let i = 1; i < tokens.length - 1; i += 2) {
                if (i + 1 === tokens.length - 1) {
                    let result = evaluateExpression(tokens[i], scope);
                    scope.pop();
                    return result;
                }
                newScope[tokens[i]] = evaluateExpression(tokens[i + 1], scope);
            }
            let result = evaluateExpression(tokens[tokens.length - 1], scope);
            scope.pop();
            return result;
        } else {
            throw new Error(`Unknown operation: ${operation}`);
        }
    };

    let globalScope = [{}];
    return evaluateExpression(expression, globalScope);
}
