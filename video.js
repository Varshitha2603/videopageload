"use strict"

let video = document.getElementById("video_play");
let play_btn = document.getElementById("play_btn");

// video.requestFullscreen(true);

play_btn.addEventListener("click", () => {
    if(video.paused)
    {
        video.play();
        play_btn.innerHTML = `<i class="fa-solid fa-circle"></i>  Pause`;
    }
    else
    {
        video.pause();
        play_btn.innerHTML = `Play  <i class="fa-solid fa-circle"></i>`;
    }
})