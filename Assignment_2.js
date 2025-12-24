//1. Write a function that logs the current file path and directory.
// const path = require("path");
// console.log({
//   File: __filename,
//   Dir: __dirname
// });
/*output:{
  File: 'D:\\Backend node.js Route\\Assignment\\Assignment.2\\Assignment_2.js',
  Dir: 'D:\\Backend node.js Route\\Assignment\\Assignment.2' 
}*/
//==================================================================================
//2. Write a function that takes a file path and returns its file name.
// const path = require("path");
// console.log(path.basename("D:\\Backend node.js Route\\Assignment\\Assignment.2\\Assignment_2.js"));
//output:Assignment_2.js
//===================================================================================
//3. Write a function that builds a path from an object
// const path = require("path");
// const obj = {
//   dir: __dirname,
//   name: "Assignment_2",
//   ext: ".js"
// };
// console.log(path.join(obj.dir, obj.name + obj.ext));
//output:D:\Backend node.js Route\Assignment\Assignment.2\Assignment_2.js
//==========================================================================
//4. Write a function that returns the file extension from a given file path.
// const path = require("path");
// console.log(path.extname(__filename));
//output:.js
//===========================================================================
//5. Write a function that parses a given path and returns its name and ext.
// const path = require("path");
// const p = path.parse(__filename);
// console.log({ Name: p.name, Ext: p.ext });
//output:{ Name: 'Assignment_2', Ext: '.js' }
//============================================================================
//6. Write a function that checks whether a given path is absolute.
// const path = require("path");
// console.log(path.isAbsolute(__filename));
//output:true
//=============================================================================
//7. Write a function that joins multiple segments
// const path = require("path");
// console.log(path.join("src", "components", "App.js"));
//output:src\components\App.js
//=============================================================================
//8. Write a function that resolves a relative path to an absolute one.
// const path = require("path"); 
// console.log(path.resolve("./Assignment_2.js"));
//output:D:\Backend node.js Route\Assignment\Assignment.2\Assignment_2.js
//=============================================================================
//9. Write a function that joins two paths.
// const path = require("path");
// console.log(path.join(__dirname, "files/data.txt"));
//output:D:\Backend node.js Route\Assignment\Assignment.2\files\data.txt
//=============================================================================
//10. Write a function that deletes a file asynchronously.
// const fs = require("fs");
// fs.unlink("delete.txt", () => {
//   console.log("The file.txt is deleted.");
// });
//output:The file.txt is deleted.
//=============================================================================
//11. Write a function that creates a folder synchronously.
// const fs = require("fs");
// fs.mkdirSync("testFolder");
// console.log("Success");
// //output:Success
//=============================================================================
//12. Create an event emitter that listens for a "start" event and logs a welcome message.
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("start", () => console.log("Welcome event triggered!"));
// emitter.emit("start");
//output:Welcome event triggered!
//=============================================================================
//13. Emit a custom "login" event with a username parameter.
// const EventEmitter = require("events");
// const events = new EventEmitter();

// events.on("login", (name) => {
//   console.log("User logged in: " + name);
// });

// events.emit("login", "Ahmed");
//output:User logged in: Ahmed
//=============================================================================
//14. Read a file synchronously and log its contents.
// const fs = require("fs");
// console.log(fs.readFileSync("notes.txt", "utf8"));
//output:This is a note
//=============================================================================
//15. Write asynchronously to a file.
// const fs = require("fs");
// fs.writeFile("async.txt", "Async save", () => {
// });
//=============================================================================
//16. Check if a directory exists.
// const fs = require("fs");
// console.log(fs.existsSync("notes.txt"));
//output:true
//=============================================================================
//17. Write a function that returns the OS platform and CPU architecture.
// const os = require("os");
// console.log({
//   Platform: os.platform(),
//   Arch: os.arch()
// });
//output:{ Platform: 'win32', Arch: 'x64' }
//=============================================================================