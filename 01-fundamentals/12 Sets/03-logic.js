const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.union(B);
console.log(C) //a, b, c,d

const D = A.intersection(B);
console.log(D) //b, c  //COMMON

const E = A.difference(B);
console.log(E) //a  //IN A NOT IN B

const F = new Set(['a', 'b']);
const G = new Set(['a', 'b', 'c', 'd']);

console.log(F.isSubsetOf(G)) //true
console.log(G.isSupersetOf(F)) //true