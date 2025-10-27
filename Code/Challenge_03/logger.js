

// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = true;
const showHints = false;

// Logger class
class Logger {
    constructor(){
        if (Logger.instance){
            return Logger.instance;
        }
        Logger.instance = this;
        this.logs = [];
        
        Object.freeze();
        this.logCount = 0;
    }

    log(entry, message2){
        //console.log(entry);
        this.logs.push(`${entry} - ${message2}`);
        this.logCount = this.logCount + 1;
    }

    showLog(){
        console.log(this);
    }
  // Your code begins here.

  // Your code ends here.
};

const loggerInstance = new Logger();

// Proxy handler object to intercept the behavior of the logger instance
// const handler = {
//   // Your code begins here.
//     apply: function (target, thisArg, argumentsList){
//         console.log(target);
//         console.log(thisArg);
            
//         // if (target === "log"){
//         //     thisArg.logs.push(`${Date.now()} - ${argumentsList[0]}`);
//         // }
//         return true;
//     },
//     // set: function (obj, prop, value){
//     //     console.log(obj);
//     //     console.log
//     //     if (prop === "log") {
//     //         obj.logs.push(`${Date.now()} - ${value}`)
//     //     }
//     //     return true;
//     //      }
// };
const handler = {
  get: function (target, prop) {
    if (prop === "log") {
      return function (message, message2) {
        const timestamp = new Date();
        return target[prop](`${timestamp} - ${message}`, message2);
      };
    } else if (prop === "showLog") {
      return target[prop].bind(target);
    } else {
      return target[prop];
    }
  },
};

export const logger = new Proxy(loggerInstance, handler);