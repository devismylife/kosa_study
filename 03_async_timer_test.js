function run() {
    setTimeout(() => { // setTimeout( function, start_time(msec) )
      const start = Date.now();
      for (let i = 0; i < 1000000000; i++) {}
      const end = Date.now();
      console.log(end - start + 'ms');
    }, 1000);
}
  
run();
console.log('Done !!!');
