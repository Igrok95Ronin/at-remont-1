window.addEventListener('DOMContentLoaded', function () {
	'use strict';

!(function() {
    const img = document.querySelector('.clip')
    let sum = img.clientWidth / 2
    img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    img.addEventListener('mousemove', e => {
        sum = e.offsetX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    })


    img.addEventListener('touchmove', e => {
        e.preventDefault()
        sum = e.targetTouches[0].clientX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    })
})()

!(function() {
    const img = document.querySelector('.clip2')
    let sum = img.clientWidth / 2
    img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    img.addEventListener('mousemove', e => {
        sum = e.offsetX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    })


    img.addEventListener('touchmove', e => {
        e.preventDefault()
        sum = e.targetTouches[0].clientX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)

        console.log(sum);
    })
})()
!(function() {
    const img = document.querySelector('.clip3')
    let sum = img.clientWidth / 2
    img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    img.addEventListener('mousemove', e => {
        sum = e.offsetX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    })


    img.addEventListener('touchmove', e => {
        e.preventDefault()
        sum = e.targetTouches[0].clientX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)

        console.log(sum);
    })
})()
!(function() {
    const img = document.querySelector('.clip4')
    let sum = img.clientWidth / 2
    img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    img.addEventListener('mousemove', e => {
        sum = e.offsetX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)
    })


    img.addEventListener('touchmove', e => {
        e.preventDefault()
        sum = e.targetTouches[0].clientX + 50
        img.setAttribute("style",`clip: rect(auto, ${sum}px, auto, 0);`)

        console.log(sum);
    })
})()


})
