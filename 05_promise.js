function run() {
    return new Promise((resolve, reject) => { // resolve: 성공 시 수행하는 함수, reject: 실패 시 수행하는 함수
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 1000000000; i++) {}
            const end = Date.now();
            console.log(end - start + 'ms');
            resolve();
        }, 1000);
    });
}
 
run().then(() => {console.log('Done !!!');}); // run()에서 promise를 리턴하므로, (new Promise).then()을 수행함. 즉, resolve에 주어지는 함수가 로그호출 익명 함수
