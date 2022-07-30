class VideoCard {
    render(data){
        return(
            `
            <div class="grid_card">
                        <video src="${data.url}" controls></video>
                        <h3>${data.title}</h3>
                    </div>
            `
        )
    }
}

export default new VideoCard()