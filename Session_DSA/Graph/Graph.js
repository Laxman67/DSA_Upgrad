class Graph {
  constructor() {
    this.adjList = new Map();
  }

  //   Helper Function
  addEdgeHelper(node, adj, weight) {
    if (this.adjList.has(node)) {
      // if present then get and add into it
      let presetNode = this.adjList.get(node);
      // Addign to the existing -> add into set
      presetNode.add({ adj, weight }); //add another node into set
      this.adjList.set(node, presetNode); // append to the adj list
    } else {
      this.adjList.set(node, new Set([{ adj, weight }]));
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
console.log(G.getAllNodes());
let findEdge = 'A';
console.log(G.getEdges(findEdge) ? G.getEdges(findEdge) : 'No edges found !');
