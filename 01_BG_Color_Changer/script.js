 const boxes = document.querySelectorAll('.box')

 boxes.addEventListener('click',()=>{
    console.log('clickced');
 })

 boxes.forEach(function(e){
   console.log(e);
 })