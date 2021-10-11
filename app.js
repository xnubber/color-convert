const ranges = document.querySelectorAll('.range')
const hexBox = document.querySelector('.hex-text')
const viewColor = document.querySelector('body')


ranges.forEach(function (range) {
  range.addEventListener('input', function (event) {
    const colorNum = document.querySelector(`.${event.target.id}`)
    colorNum.textContent = event.target.value
    let redNum = Number(document.querySelector('.red-num').textContent)
    let greenNum = Number(document.querySelector('.green-num').textContent)
    let blueNum = Number(document.querySelector('.blue-num').textContent)
    hexBox.textContent = rgbToHex(redNum, greenNum, blueNum)
    viewColor.style.backgroundColor = hexBox.textContent
  })
})

function componentToHex(val) {
  let hex = val.toString(16)
  return hex.length === 1 ? "0" + hex : hex
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}
