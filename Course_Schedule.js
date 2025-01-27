// 207. Course Schedule


// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.







/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    let graph = new Array(numCourses).fill(0).map(() => []);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    let visited = new Array(numCourses).fill(0);


    function dfs(course) {
        if (visited[course] === 1) return true;  // Cycle detected
        if (visited[course] === 2) return false; // Already processed and no cycle
        
        // Mark as visiting
        visited[course] = 1;
        
        // Visit all the neighbors
        for (let neighbor of graph[course]) {
            if (dfs(neighbor)) return true;
        }
        
        // Mark as visited
        visited[course] = 2;
        return false;
    }
    
    // Check each course
    for (let i = 0; i < numCourses; i++) {
        if (dfs(i)) return false;  // Cycle detected
    }
    
    return true;
};