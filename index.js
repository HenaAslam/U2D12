
const options = {
	method: 'GET',
	headers: {
		Authorization: "Bearer 563492ad6f91700001000001fb2b1b108cab4527a50e9e63630a8706"
	}
};

const renderImages=(fetchedImages)=>{
    let cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].firstElementChild.remove(); 
        let img = document.createElement("img");
        img.src = fetchedImages[i].src.large;
        //img.className = "bd-placeholder-img card-img-top";
        img.style = "height: 200px; object-fit: cover";
        cards[i].insertBefore(img, cards[i].firstChild);
    }
}

   


const idofImages=(fetchedImages)=>{
    let strings=document.querySelectorAll('body > main > div > div > div > div > div > div > div > small')
    for(i=0;i<strings.length;i++){
        let str=strings[i];
        str.innerText=`${fetchedImages[i].id}`

    }
}
function fetchImages(search){
    fetch(`https://api.pexels.com/v1/search?query=${search}`,options)
    .then((res)=>{
        //console.log(res)
        return res.json()
      
    })
    .then((jsonimgs)=>{
        
       console.log(jsonimgs.photos)
       let data=jsonimgs.photos
        renderImages(data)
        idofImages(data)
        
    })
    .catch(err=>console.log(err))

}

function editToHide(){
    let btns=document.querySelectorAll('body > main > div > div > div > div > div > div > div > div > button:nth-child(2)')
   // console.log(btns)
    for(i=0;i<btns.length;i++){
        btn=btns[i]
        btn.innerText="Hide"
        
    }
    
    
   
    
}
editToHide()

function hideCard(){
    let btns=document.querySelectorAll('body > main > div > div > div > div > div > div > div > div > button:nth-child(2)')
    let cards=document.querySelectorAll('body > main > div > div > div > div > div')
    //console.log(cards)
    
    for(i=0;i<btns.length;i++){
        let btn=btns[i]
        let card=cards[i]
        btn.addEventListener("click",function(){
         
               
                card.style.display="none"
            
            
           
        })
    }
}
hideCard()


// const handleSearchQuery = (e) => {
//     searchQuery = e.target.value.toLowerCase();
//     return searchQuery
//     //console.log(searchQuery)
//   };

  
  function searchImages(){
    let searchquery=document.getElementById('inp').value
        fetchImages(searchquery)
  }



  function modalView(){
   
    let btns=document.querySelectorAll('body > main > div > div > div > div > div > div > div > div > button:nth-child(1)')
    let cards=document.querySelectorAll('.card')
    for(i=0;i<btns.length;i++){
                let btn=btns[i]
                let card=cards[i]
               
                btn.setAttribute("data-toggle", "modal");
                btn.setAttribute("data-target", "#exampleModal");
                btn.addEventListener("click",function(){
                    let modal = document.querySelector(".modal-body");
                    modal.innerHTML=""
                        cardImage=card.firstElementChild
                       
                        let image = document.createElement("img");
                        image.className = "img-fluid w-100"
                        console.log(cardImage)
                        image.src=cardImage.src
                         modal.appendChild(image)
                })
            }
  

  }
  
  modalView()

  function carousel(forest){
    let carouselNode=document.getElementById('appendcarousel')
    fetch(`https://api.pexels.com/v1/search?query=forest`,options)
    .then((res)=>{
              
                return res.json()
              
            })
            .then((jsonimgs)=>{
          
               let data=jsonimgs.photos
                //console.log(data)
                for(i=0;i<data.length;i++){
                    let cardImage=data[i].src.large
                    console.log(cardImage)
                    carouselNode.innerHTML+=`<div class="carousel-item ${
                        i === 0 ? "active" : ""
                      }">
                    <img src="${cardImage}" class="d-block w-100 " alt="..." >
                  </div>`
                }
            })
            .catch(err=>console.log(err))
   
  }
  carousel()

//   <div class="carousel-item >
//               <img src="${
//                 cardImage.src.landscape
//               }" class="d-block w-100 " alt="..." style="height:200px">
//             </div>
//   carousel()
