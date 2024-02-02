
const useDebounce = (cb, delay = 2000) => {
    let timeout;

    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(cb);
            cb(...args);
        }, delay)
    }
};

export default useDebounce;