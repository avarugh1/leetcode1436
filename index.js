/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    // trick solution is that result is the element that appears only once and is in the 2nd position in an array
    // normal solution would be to use an adjacency matrix
    // but is there any valid time complexity difference b/w them?

    let adjm = new Map();
    for(let i=0;i < paths.length;i++){
        adjm.set(paths[i][0], paths[i][1]);
    }

    var curCity = paths[0][0];
    while(adjm.get(curCity) !== undefined){
        curCity = adjm.get(curCity);
    }
    return curCity;
};

{
    let paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]];
    console.log(destCity(paths).toString());
}
{
    let paths = [["B","C"],["D","B"],["C","A"]];
    console.log(destCity(paths).toString());
}
{
    let paths = [["A","Z"]];
    console.log(destCity(paths).toString());
}