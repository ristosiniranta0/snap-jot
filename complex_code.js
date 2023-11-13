/*
Filename: complex_code.js

This code demonstrates a complex algorithm to find the shortest path in a weighted directed graph using Dijkstra's algorithm.
It includes various helper functions and data structures for graph representation, priority queue, and path calculation.
Note: This code assumes the graph is represented as an adjacency list.

Author: [Your Name]

Date: [Current Date]
*/

// Graph representation using adjacency list
class Graph {
  constructor() {
    this.vertices = new Map();
  }
  
  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }
  
  addEdge(source, destination, weight) {
    this.vertices.get(source).push({ destination, weight });
  }
}

// Priority queue implementation for Dijkstra's algorithm
class PriorityQueue {
  constructor() {
    this.nodes = [];
  }
  
  enqueue(node, priority) {
    this.nodes.push({ node, priority });
    this.sort();
  }
  
  dequeue() {
    return this.nodes.shift().node;
  }
  
  sort() {
    this.nodes.sort((a, b) => a.priority - b.priority);
  }
  
  isEmpty() {
    return this.nodes.length === 0;
  }
}

// Dijkstra's algorithm to find the shortest path
function dijkstra(graph, start) {
  const distances = new Map();
  const previous = new Map();
  const queue = new PriorityQueue();
  
  // Initialize distances with Infinity and previous with null
  graph.vertices.forEach((_, vertex) => {
    distances.set(vertex, Infinity);
    previous.set(vertex, null);
  });
  
  // Set distance of start vertex to 0 and enqueue it
  distances.set(start, 0);
  queue.enqueue(start, 0);
  
  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    const neighbors = graph.vertices.get(current);
    
    for (let neighbor of neighbors) {
      const { destination, weight } = neighbor;
      const distanceFromStart = distances.get(current) + weight;
      
      if (distanceFromStart < distances.get(destination)) {
        distances.set(destination, distanceFromStart);
        previous.set(destination, current);
        queue.enqueue(destination, distanceFromStart);
      }
    }
  }
  
  return { distances, previous };
}

// Function to reconstruct the shortest path from start to end
function reconstructPath(previous, start, end) {
  const path = [];
  let current = end;
  
  while (current !== start) {
    path.unshift(current);
    current = previous.get(current);
  }
  
  path.unshift(start);
  return path;
}

// Example usage with a simple graph
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);
graph.addEdge('C', 'E', 2);
graph.addEdge('D', 'E', 3);

const startNode = 'A';
const endNode = 'E';

const { distances, previous } = dijkstra(graph, startNode);
const shortestPath = reconstructPath(previous, startNode, endNode);

console.log(`Shortest path from ${startNode} to ${endNode}: ${shortestPath}`);
console.log(`Distances from ${startNode}:`, distances);