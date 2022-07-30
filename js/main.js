import { main_api, bestComediesUrl, actionUrl } from "./api.js";
const popularMovieContainer = document.querySelector('#popularMovieContainer')
const bestComedies = document.querySelector('#bestComedies')
const actionMovies = document.querySelector('#actionMovies')
const popularLeftButton = document.querySelector('#popularLeftButton')
const popularRightButton = document.querySelector('#popularRightButton')
const videoMainContainer = document.querySelector('#videoMainContainer')

import SliderCard from "./SliderCard.js"
import VideoCard from "./VideoCard.js";


console.log(main_api)




fetch(main_api)
.then(resp=>resp.json())
.then(data =>{
    data.results.forEach(movie => {
        popularMovieContainer.innerHTML += SliderCard.render(movie)
       
          
    });
    
    // console.log(data.results)
    console.log(popularMovieContainer.children)
    let inc = 0
    function mainSlider(){
        for(let i = 0; i<popularMovieContainer.children.length; i++){
            popularMovieContainer.children[i].style.transform = `translateX(-${inc*300}px)`
        }
    }
   
    setInterval(()=>{
        if(inc< popularMovieContainer.children.length - 4 ){
            inc++}else{
                inc=0
            }
       
        mainSlider()
        console.log(inc)
    },3000) 

popularRightButton.addEventListener('click', ()=>{
    if(inc< popularMovieContainer.children.length - 4 ){
        inc++}else{
            inc=0
        }
   
    mainSlider()
})
popularLeftButton.addEventListener('click', ()=>{
    if (inc>0){
        inc--
    }else{
        inc= popularMovieContainer.children.length-4
    }
    mainSlider()
})

})




fetch(bestComediesUrl)
.then(resp=>resp.json())
.then(data =>{
    data.results.forEach(movie => {
        bestComedies.innerHTML += SliderCard.render(movie)
       
          
    });
    
    console.log(data.results)
})
fetch(actionUrl)
.then(resp=>resp.json())
.then(data =>{
    data.results.forEach(movie => {
        actionMovies.innerHTML += SliderCard.render(movie)
    });
    
    console.log(data.results)
})

fetch('../db/videosApi.json')
.then(resp=> resp.json())
.then(video =>{
    console.log(video)
    video.forEach(data=>{
        videoMainContainer.innerHTML += VideoCard.render(data)
    })

})