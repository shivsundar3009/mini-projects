 const boxes = document.querySelectorAll('.box')

 boxes.forEach(function(box){
   box.addEventListener('click',(e)=>{
    console.log(e.target)
    
   }) 
 })