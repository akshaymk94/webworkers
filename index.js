let colors = ['red', 'blue', 'green', 'purple', 'indigo', 'violet', 'pink', 'yellow', 'orange']

let colorChanger = document.getElementById('colorChanger')

colorChanger.addEventListener('click', function () {
    body = document.querySelector('body')
    body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
})

btnSum.addEventListener('click', function () {
    let resultText = document.getElementById('result')
    resultText.textContent = undefined;

    const sumWorker = new Worker('./sumWorker.js')
    const value = 100000000;

    sumWorker.postMessage(value)

    sumWorker.onmessage = (e) => {
        resultText.textContent = e.data;
    }
})