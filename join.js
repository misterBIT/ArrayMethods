// see console for output

var name = 'puki ben david';

var parts = name.split(' ') 
.map(part => part.charAt(0).toUpperCase() + part.slice(1)) 
.join(' ');

console.log(parts);