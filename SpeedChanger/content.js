let interval = setInterval(()=> {
    let header = document.querySelector('._2O84H');
    if (header) {
        console.log(header);
        clearInterval(interval);

        let btn = document.createElement('button');
        btn.classList.add('btn2X');
        btn.innerHTML = '2X';
        header.appendChild(btn);

        btn.addEventListener("click", function(){
            const audios = document.querySelectorAll('audio')
            for(const audio of audios) { 
                audio.playbackRate = 2;
            }
        })
    }
    
},1000)

