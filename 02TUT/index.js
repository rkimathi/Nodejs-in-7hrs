const fsPromises = require('fs').promises;
const path = require('path')

const myNewfunc = async () => {
    try {
        const learn = await fsPromises.readFile(path.join(__dirname, 'learn', 'industry_sic.csv'), 'utf8');
        console.log(`Reading the industry_sic file done successfully:${learn}`);

        const continent = await fsPromises.readFile(path.join(__dirname, 'learn', 'continent.csv'), 'utf-8');
        console.log(`Reading the continents file done successfully:${continent}`);

        const county_uk = await fsPromises.readFile(path.join(__dirname, 'learn', 'county_uk.csv'), 'utf-8');
        console.log(`Reading the continents file done successfully:${county_uk}`);

        // write operation
        await fsPromises.unlink(path.join(__dirname, 'learn', 'myLog.csv'), learn);
        console.log(`deleting the new file done successfully: \n${learn}`);



        
        // append operation
        await fsPromises.appendFile(
            path.join(__dirname, 'files', 'industry.csv'), `${learn}\n${continent}\n${county_uk}`);
            console.log('Appended Successfully');
        
    } catch (err) {
        console.error(err);
    }
}
myNewfunc();

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'uts8');
//         console.log(data);
//         await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
//         await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
//         await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseWrite.txt'));
       
//     } catch (err) {
//         console.error(err);
//     }
// };



// Read File
// fs.readFile(path.join(__dirname , 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
// //     console.log(data);
// });

// Write file
// fs.writeFile(path.join(__dirname , 'files', 'writing.txt'), 'I am happy to learn Javascript', (err) => {
//     if (err) throw err;
//     console.log('Writing successfully completed');

//     fs.appendFile(path.join(__dirname , 'files', 'writing.txt'), '\nI want to be a Pro', (err) => {
//         if (err) throw err;
//         console.log('I have appended inside writing successfully');

//         fs.rename(path.join(__dirname , 'files', 'writing.txt'), path.join(__dirname , 'files', 'updated.txt'), (err) => {
//             if (err) throw err;
//             console.log('Renaming successfully completed');
//         })
//     });
// });

// Append file
// fs.appendFile(path.join(__dirname , 'files', 'appending.txt'), '\nI want to be a Pro', (err) => {
//     if (err) throw err;
//     console.log('Appending successfully completed');
// });

// exit on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`);
//     process.exit(1);
// });

