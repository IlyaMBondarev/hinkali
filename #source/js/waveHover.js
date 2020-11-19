document.querySelectorAll('.wave').forEach(wave => {
    let span = wave.textContent;
    let inner = '';
    for (let indexOfLetter = 0; indexOfLetter < span.length; indexOfLetter++) {
        inner += `<span style="transition: font-size 0s linear ${indexOfLetter * 0.04}s">` + span[indexOfLetter] + '</span>';
    }
    wave.innerHTML = inner;
})