class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let n = tokens.length;
        for (let i = 0; i < n; i++) {
            let op1, op2, res;
            switch (tokens[i]) {
                case '+':
                    op2 = stack.pop();
                    op1 = stack.pop();
                    res = op1 + op2;
                    stack.push(res);
                    break;
                case '-':
                    op2 = stack.pop();
                    op1 = stack.pop();
                    res = op1 - op2;
                    stack.push(res);
                    break;
                case '*':
                    op2 = stack.pop();
                    op1 = stack.pop();
                    res = op1 * op2;
                    stack.push(res);
                    break;
                case '/':
                    op2 = stack.pop();
                    op1 = stack.pop();
                    res = Math.trunc(op1 / op2);
                    stack.push(res);
                    break;
                default:
                    stack.push(Number(tokens[i]));
            }
        }
        return stack[0];
    }
}
