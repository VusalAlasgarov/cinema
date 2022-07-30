import { imgUrl } from "./api.js"



class SliderCard{
render(movie){
    return(
        `<div class="slider_main_card"> 
        <img src="${imgUrl+movie.poster_path}" alt="">
        <h3>${movie.title}</h3>
    </div>`
    )
}


}

export default new SliderCard()