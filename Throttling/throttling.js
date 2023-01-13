
const myThrottle = (fun, delay) => {
    return function (...args) {
        document.getElementById('myid').disabled = true;
        setTimeout(() => {
            fun()
        }, delay)
    }
}

const newFun = myThrottle(() => {
    document.getElementById('myid').disabled = false;
    console.log('user Clicked');
}, 5000)