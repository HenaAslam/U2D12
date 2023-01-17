
const options = {
	method: 'GET',
	headers: {
		Authorization: "Bearer 563492ad6f91700001000001fb2b1b108cab4527a50e9e63630a8706"
	}
};

 const renderImages=(fetchedImages)=>{
   
    let cards=document.querySelectorAll('.card')
    let svgs=document.querySelectorAll('.card svg')

    
    for(i=0;i<cards.length;i++){
       let imgNode= document.createElement('img')
       imgNode.src=`${fetchedImages[i].src.large}`

         let card=cards[i];
         card.replaceChild(imgNode,svgs[i])
         //card.replaceChild(`<img src="${fetchedImages[i].src.large}" alt="">`,svgs[i])
 
         // card.innerHTML=""
        // card.innerHTML+=`<img src="${fetchedImages[i].src.large}" alt="">`

        //  let newNode=document.createElement('div')
        //  newNode.style.height='100px'
        //  newNode.innerHTML=`<img src="${fetchedImages[i].src.large}" alt="">`
        
        //  card.parentNode.replaceChild(newNode, card);

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
         
               
                card.style.visibility="hidden"
            
            
           
        })
    }
}
hideCard()

// function searchField(){
//     let btn=document.getElementById('button-addon1')
//     let val=document.getElementById('inp').value
//     console.log(val)
//     btn.addEventListener("click",fetchImages(val))


// }
// searchField()