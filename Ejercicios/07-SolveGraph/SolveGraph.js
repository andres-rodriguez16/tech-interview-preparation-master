function SolveGraph(graph, start, end, visited = {}) {

  //console.log(visited[start]);
  if (visited[start]) return false;
  visited[start] = true;
  for (const node of graph[start]) {
    //console.log(node);
    if (node === end) return true;
    if (SolveGraph(graph, node, end, visited)) return true;
  }
  return false;
}
const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};
console.log(SolveGraph(graph, "a", "r")); //(true);
console.log(SolveGraph(graph, "a", "d")); //(true);
console.log(SolveGraph(graph, "s", "b"))//(false);

module.exports = SolveGraph
