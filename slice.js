// Array.prototype.slice();

var person  = {
    name: 'puki-cohen'
};

var filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase()
};

var input    = 'name | deslugify | uppercase'; 
var sections = input.split('|').map(x => x.trim()); // [name, deslugify, uppercase]
var ref      = person[sections[0]];
var output   = sections
    .slice(1)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

console.log(output);