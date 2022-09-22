class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i) {
        return i*2+1;
    }

    getRightChildIndex(i) {
        return i*2+2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(val) {
        this.data[this.data.length] = val;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIdx = this.data.length-1;

        while (this.data[currentIdx] > thi.data[this.getParentIndex()]) {
            this.swap(currentIdx, this.getParentIndex(currentIdx));
            currentIdx = this.getParentIndex(currentIdx);
        }
    }
}