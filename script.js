let songIndex = 0 ;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let audioElement= new Audio('letmeloveyou.mp3');
let songs =[
    {songName: "Salam-e-ishq", filePath: "song/letmeloveyou.mp3", coverPath: "cover/1.mp3"},
    {songName: "Salam-e-ishq",filePath: "song/letmeloveyou.mp3", coverPath: "cover/1.mp3"},
    {songName: "Salam-e-ishq",filePath: "song/letmeloveyou.mp3", coverPath: "cover/1.mp3"},
    {songName: "Salam-e-ishq",filePath: "song/letmeloveyou.mp3", coverPath: "cover/1.mp3"},
    {songName: "Salam-e-ishq", filePath: "song/letmeloveyou.mp3", coverPath: "cover/1.mp3"}

];
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100 
})
  