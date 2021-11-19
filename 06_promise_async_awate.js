function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
async function process() { //async: 비동기 함수가 존재함
    await run(); // await: run이 될 때까지 대기
    await run();
    console.log('Done !!!');
}
 
process();
