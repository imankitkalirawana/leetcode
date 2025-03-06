/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const visited = new Set();

    const dfs = (room) => {
        visited.add(room);
        console.log(visited)

        for (const i of rooms[room]) {
            if (!visited.has(i)) {
                dfs(i)
            }
        }
    }


    dfs(0);

    return visited.size === rooms.length

}