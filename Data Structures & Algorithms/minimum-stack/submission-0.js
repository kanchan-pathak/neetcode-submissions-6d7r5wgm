class MinStack {
    constructor() {
        this.stack=[];
        this.minStack=[];
        //new MinPriorityQueue();
        // console.log(this.minStack) 
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
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
         return this.minStack.at(-1);
    }
}
