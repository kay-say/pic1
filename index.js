window.addEventListener("load",()=>{
    let searchKey="heart"
    const getPics = (searchKey) => {
        fetch(`https://api.unsplash.com/search/photos/?query=${searchKey}&per_page=12&client_id=aUnj9OOxwAUFsu3FT8BZkrANSojNSSN9ARSryaYPDAU`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            data.results.forEach(item=>{
                const div=document.createElement("div")
                div.classList.add("img_wrapper")
                const img=document.createElement("img")
                img.classList.add("img")
                img.src=item.urls.thumb
                div.appendChild(img)
                document.querySelector(".images").appendChild(div)
            })
            
        })
        .catch(err=>console.log(err))
    }
    getPics(searchKey)

    const form=document.querySelector("form")
    form.addEventListener("submit",e=>{
        e.preventDefault()
        searchKey=form.searchItem.value
        document.querySelector(".description").textContent=searchKey
        document.querySelector(".images").innerHTML=""
        getPics(searchKey)

        form.searchItem.value=""
    })
   
})