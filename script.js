let recursionDeepLimit = 17

const createDiv = (recursionDeepCounter) => {
  let elemArray = document.getElementsByClassName('leaf')

  Array.from(elemArray).forEach((element) => {
    let newLeaf = document.createElement('div')
    newLeaf.className = 'leaf'
    element.appendChild(newLeaf)

    newLeaf = document.createElement('div')
    newLeaf.className = 'leaf'
    element.appendChild(newLeaf)

    element.classList.remove('leaf')
  })

  if (recursionDeepCounter < recursionDeepLimit) {
    createDiv(++recursionDeepCounter)
  }
}

window.addEventListener('DOMContentLoaded', () => {
  createDiv(0)
})
