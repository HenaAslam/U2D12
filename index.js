
const options = {
	method: 'GET',
	headers: {
		Authorization: "Bearer 563492ad6f91700001000001fb2b1b108cab4527a50e9e63630a8706"
	}
};



function renderImages(){
let cards=document.querySelectorAll('.card svg')
for(i=0;i<cards.length;i++){
    let card=cards[i];
    card.innerHTML=""

}
}


function loadImg(){
    let btn=document.getElementById('loadimg')
    btn.addEventListener("click",function(){
        fetch("https://api.pexels.com/v1/search?query=christmas",options)
        .then((res)=>{
            //console.log(res)
            return res.json
          
        })
        .then((jsonChristmas)=>{
            
           console.log(jsonChristmas)
           //renderImages();
        })
        .catch(err=>console.log(err))
    })
}
loadImg()