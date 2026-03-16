// First Principle: What is a Graph?

// A Graph is a structure that represents connections between things.
// A graph has two parts:

Vertices (Nodes)
Edges (Connections)

// Ex
A — B — C
|   |
D — E

// Vertices are : A B C D E
// Nodes are : A-B
B-C
A-D
B-E
D-E

// Types of Graphs
// Undirected Graph - Connection works both ways.
A — B
// Means 
// A connected to B
// B connected to A

// Directed Graph - Connections has direction
// A → B - Where a points to b 

// Graps  Most common representation: is Adjacency List
A — B — C
|   |
D — E
// Adjacency list : 
{
  A: ["B","D"],
  B: ["A","C","E"],
  C: ["B"],
  D: ["A","E"],
  E: ["B","D"]
}

class Graph {
  constructor() {
    this.adjList = {}
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = []
    }
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2)
    this.adjList[v2].push(v1)
  }
}

// EXAMPLE

let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")

g.addEdge("A","B")
g.addEdge("B","C")

// Graph becomes 
A — B — C

// Graph Traversal there are two main algorithm 
// DFS (Depth First Search)
// Go deep first.
// Example order:
// A → B → C → E → D 

// uses Stack / Recursion

// BFS (Breadth First Search) visit level by level 
// A → B → D → C → E uses Queue 

// Why Graphs Are Important

// Graphs power many systems:
// 	•	Google search ranking
// 	•	Navigation apps
// 	•	Social networks
// 	•	Recommendation systems
// 	•	Network routing

// Graph algorithms solve very complex real-world problems.
A — B — C
|   |
D — E

{
   A: B, D
   B: A, C, E
   C: B
   D: A, E
   E: D, B
}