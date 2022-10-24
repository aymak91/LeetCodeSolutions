class BrowserHistory {
    constructor(homepage) {
        this.browserHistory = new DoublyLinkedList(homepage);
    }

    visit(url) {
        const newURL = new Node(url);
        this.browserHistory.add(newURL);
    }

    back(steps) {

        while (steps > 0 && this.browserHistory.current.prev.val !== null) {
            this.browserHistory.current = this.browserHistory.current.prev;
            steps--;
        }
        
        return this.browserHistory.current.val;
    }

    forward(steps) {
        while (steps > 0 && this.browserHistory.current.next.val !== null) {
            this.browserHistory.current = this.browserHistory.current.next;
            steps--;
        }
        
        return this.browserHistory.current.val;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = new Node(null);
        this.tail = new Node(null);
        this.homepage = new Node(val);

        this.head.next = this.homepage;
        this.tail.prev = this.homepage;

        this.homepage.prev = this.head;
        this.homepage.next = this.tail;

        this.current = this.homepage;
    }

    add(node) {
        node.next = this.tail;
        node.prev = this.current;
        this.current.next = node;
        this.current = node;
    }
}

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */