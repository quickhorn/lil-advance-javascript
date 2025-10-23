// This is how your code will be called.
// You can edit the logEntries array to try different testing cases.
const logEntries = [
    "User Maiken created.",
    "User Simran created.",
    "User Simran updated.",
    "User Maiken deleted.",
  ];
  
  logEntries.forEach((entry) => {
    logger.log(entry);
  });
  
  const result = logger.showLog();