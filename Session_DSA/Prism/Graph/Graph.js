class Graph {
  constructor() {
    this.adjList = new Map();
  }

  //   Helper Function
  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      var presetNode = this.adjList.get(node);

      presetNode.add({ adj, weight });
      
      this.adjList.set(node, presetNode);
    } else {
      this.adjList.set(node, new Set([{ adj , weight }]));
    }
  }

  addEdge(node, adj, weight) {
    this.addEdgeHelper(node, adj, weight);
  }

  getEdges(node) {
    return this.adjList.get(node);
  }

  getAllNodes() {
    return Array.from(this.adjList.keys());
  }

  print() {
    console.log(this.adjList);
  }
}

var G = new Graph();

G.addEdge('A', 'B', 4);
G.addEdge('A', 'C', 10);
G.addEdge('B', 'A', 5);

G.print();
