const start = new Date();
window.addEventListener('DOMContentLoaded', () => {
    console.log(`DOM fully loaded and parsed; Time: ${Date.now() - start} ms`)
})  
window.addEventListener('load', () => {
    console.log(`Page is fully loaded; Time: ${Date.now() - start} ms`)
})
  