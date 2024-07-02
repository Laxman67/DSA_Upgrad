class GraphNode {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(name, weight) {
    var graphNode = new GraphNode(name, weight);
    var contain = false;
    var i = 0;
    while (i < this.queue.length && !contain) {
      if (this.queue[i].weight > graphNode.weight) {
        this.queue.splice(i, 0, graphNode);
        contain = true;
      }
      i++;
    }
  }
}
