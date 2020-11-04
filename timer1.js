//allows for arguments on the command line
let args = process.argv.slice(2);

//in case there are no arguments, "no arguments given" will be printed to the console.
if (args.length === 0) {
  console.log("No arguments given");
}


//iterates through the arguments
for (let arg of args) {
  let delay = (Number(arg) * 1000);
  if (isNaN(Number(arg))) { //If the argument is not a number, then that message will be printed to the console.
    console.log("not a number");
  } else if (Number(arg) >= 0) { //if the argument is a positive number, then it will run.
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('BEEP');
    }, delay);
  }
}
