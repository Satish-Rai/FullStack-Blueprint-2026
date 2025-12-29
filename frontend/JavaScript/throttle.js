const Throttle = (fn, delay) => {
    let shouldExecute = true;

    return((...args)=> {
        if(!shouldExecute) return;

        fn(...args);
        shouldExecute = false;

        setTimeout(()=>{
            shouldExecute = true;
        }, delay)
    })
}
const printName = (value) => console.log(value);

const throttledFn = Throttle(printName, 1000);

throttledFn('wood');

setTimeout(()=>{
    throttledFn('new wood');
}, 500);

setTimeout(()=>{
    throttledFn('new NEW wood');
}, 1100);