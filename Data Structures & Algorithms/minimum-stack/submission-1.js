class MinStack {
    constructor() {
        this.stack=[];
        // stores min most value till current depth
        this.minStack=[];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        let newVal=this.minStack.length?Math.min(val,this.minStack.at(-1)):val;
        this.minStack.push(newVal);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        //pop the corresponding value of current depth
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        //last added element
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1);
    }
}
