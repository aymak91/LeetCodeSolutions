/*
 * Complete the 'findBestPath' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER max_t
 *  4. INTEGER_ARRAY beauty
 *  5. INTEGER_ARRAY u
 *  6. INTEGER_ARRAY v
 *  7. INTEGER_ARRAY t
 */

// n = 4
// m = 3
// max_t = 50
// beauty = [5, 10, 15, 20]

// edges
// u = [0, 1, 0]
// v = [1, 2, 3]
// t = [10, 10, 10]
function findBestPath(n, m, max_t, beauty, u, v, t) {
  // Write your code here
  
  const adjacencyList = constructGraph(beauty, u, v, t);
  const visited = new Set();
  visited.add(0);
  
  const maxBeauty = [];
  
  for (let neighbor of adjacencyList.get(0).neighbors) {
      const [node, time] = neighbor;
      maxBeauty.push(dfs(node, time, beauty[0], max_t, adjacencyList, visited));
      visited.delete(node);
  }
  
  return Math.max(...maxBeauty);
}

function dfs(current, timeTaken, beautyCollected, max_t, graph, visited) {
  if (timeTaken > max_t) return -Infinity;
  
  if (!visited.has(current)) beautyCollected += graph.get(current).beauty;
  visited.add(current);
  

  const beautyTotals = [0];
  for (let neighbor of graph.get(current).neighbors) {
      const [node, time] = neighbor;
      beautyTotals.push(dfs(node, timeTaken+time, beautyCollected, max_t, graph, visited));
      visited.delete(node);
  }
  
  if (current === 0) return Math.max(beautyCollected, Math.max(...beautyTotals));
  return Math.max(...beautyTotals);
  
}

function constructGraph(beauty, u, v, t) {
  
  const graph = new Map();
  
  for (let i=0; i<beauty.length; i++) {
      graph.set(i, {beauty: beauty[i], neighbors: new Map()});
  }
  
  for (let i=0; i<u.length; i++) {
      graph.get(u[i]).neighbors.set(v[i], t[i]);
      graph.get(v[i]).neighbors.set(u[i], t[i]);
  }
  
  return graph;
}

// beauty = [5, 10, 15, 20]
// u = [0, 1, 0]
// v = [1, 2, 3]
// t = [10, 10, 10]
