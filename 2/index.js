const nizar = require('fs')
const newnizar = require('fs')
const nizarmaarouf = require('fs')
nizar.writeFileSync('nizar.txt','My name is nizar this is my first file in node');
nizar.copyFileSync('nizar.txt', 'newnizar.txt');
newnizar.writeFileSync('newnizar.txt','That is the copy file of nizar.txt');

newnizar.rename('newnizar.txt', 'nizarmaarouf.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});

nizar.exists('nizarmaarouf.txt', (exists) => {
  if (exists) {
    console.error('myfile already exists');
  } else {
    nizar.open('myfile', 'wx', (err, fd) => {
      if (err) throw err;
      writeMyData(fd);
    });
  }
});

newnizar.appendFileSync('newnizar.txt',' , 2+2=4')



nizar.readdir('./', (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
