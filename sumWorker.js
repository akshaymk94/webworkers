onmessage = (e) => {
    let sum = 0;

    for (let i = 0; i < e.data; i++) {
        sum = sum + 1;
    }
    postMessage(sum)
}