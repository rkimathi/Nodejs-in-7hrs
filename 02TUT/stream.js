const fs = require('fs');

const continent = fs.createReadStream('./learn/continent.csv', {encoding: 'utf8'});
const world = fs.createWriteStream('./files/continents.csv');

continent.pipe(world)

// continent.on('data', (dataChunk) => {
//     world.write(dataChunk);
//     console.log('Created Successfully');
// });
// const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'});

// const ws = fs.createWriteStream('./files/new-lorem.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// });

