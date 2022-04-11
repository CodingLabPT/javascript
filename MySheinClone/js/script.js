/*
var thumbnails = document.getElementById('thumbnails');
for (let i = 0; i < thumbnails.children.length; i++) {
    console.log(thumbnails)
}
*/

const thumb01 = document.querySelector('.thumb1')
const thumb02 = document.querySelector('.thumb2')
const thumb03 = document.querySelector('.thumb3')
const thumb04 = document.querySelector('.thumb4')

const bigImg = document.querySelector('.bigImg')

thumb01.addEventListener("mouseover", () => {
    bigImg.src = "images/big1.png";
})

thumb02.addEventListener("mouseover", () => {
    bigImg.src = "images/big2.png";
})


thumb03.addEventListener("mouseover", () => {
    bigImg.src = "images/big3.png";
})

thumb04.addEventListener("mouseover", () => {
    bigImg.src = "images/big4.png";
})
