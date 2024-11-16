/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
function findItinerary(tickets) {
    const graph = new Map();

    for (const [from, to] of tickets) {
        if (!graph.has(from)) graph.set(from, []);
        graph.get(from).push(to);
    }

    for (const [from, tos] of graph) {
        tos.sort();
    }

    const result = [];

    function dfs(airport) {
        const destinations = graph.get(airport) || [];
        while (destinations.length) {
            const next = destinations.shift();
            dfs(next);
        }
        result.push(airport);
    }

    dfs("JFK");

    return result.reverse();
}
