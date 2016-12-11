// Array.prototype.indexOf();

var whitelist = ['.png', '.jpg', '.gif'];

var filesToScan = [
  {
    file: 'popo.jpg'
  },
  {
    file: 'app.js'
  },
  {
    file: 'me-emberassing-dont-send.gif'
  }
];

var filteredFiles = filesToScan.filter(currFile => {
  var ext = currFile.file.substr(currFile.file.lastIndexOf('.'));
  return whitelist.indexOf(ext) > -1;
});

console.log(filteredFiles);