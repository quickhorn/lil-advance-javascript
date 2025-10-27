import {logger} from "./logger.js"
// This is how your code will be called.
// You can edit the logEntries array to try different testing cases.
const logEntries = [
    "User Maiken created.",
    "User Simran created.",
    "User Simran updated.",
    "User Maiken deleted.",
  ];

  //it wasn't entirely clear how the log proxy was working until I added this second parameter.
  let myCount = 0;
  
  logEntries.forEach((entry) => {
    logger.log(entry, fartCount++);
  });
  
  const result = logger.showLog();