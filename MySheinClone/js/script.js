const thumbnails = document.querySelector('.thumbnails');
const bigImg = document.querySelector('.bigImg')

for (let i = 0; i < thumbnails.children.length; i++) {
    thumbnails.children[i].addEventListener("mouseover", () => {
        const path = `images/big${i+1}.png`
        bigImg.src = path;
    })
}