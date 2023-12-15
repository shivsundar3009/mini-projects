 const boxes = document.querySelectorAll('.box')

 const body = document.querySelector('body')

 
 boxes.forEach(function(box){
   box.addEventListener('click',(e)=>{
     console.log(e.target.id)
     body.style.backgroundColor = e.target.id
     
     
    // body.style.backgroundColor = body.getAttribute("id")
   }) 
 })