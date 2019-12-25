let f1 = document.forms.f1
let but = f1.elements.but
let but1 = f1.elements.but1
let long1 = f1.long
    
let tall1 = f1.tall
 
let creation = document.querySelector('.creation')
let dd1 = document.querySelector('.dd1')
let dd2 = document.querySelector('.dd2')
let dd3 = document.querySelector('.dd3')

dd1.addEventListener('click', function(){
    creation.style.backgroundColor = '  orangered'
    
})
dd2.addEventListener('click', function(){
    creation.style.backgroundColor = 'green'
    
})
dd3.addEventListener('click', function(){
    creation.style.backgroundColor = 'mediumblue'
    
})
 


long1.addEventListener('blur', function(){
   let long = f1.long.value
  creation.style.height = `${long}px` ;
      console.log(long)
    
    
})
tall1.addEventListener('blur', function(){
    let tall = f1.tall.value
    creation.style.width = `${tall}px`; 
    
})


but.addEventListener('mouseleave', function(){
    creation.innerHTML = '<div class="creation"></div>   '
    creation.style.height = "50px";
    creation.style.width = "50px";
     creation.style.backgroundColor = '#808080';
    
})

but1.addEventListener('click', function(){
    let arrx = []
    let arry = []
    let cord = prompt('Введіть кількість пар кординат',)
    for(let i = 0; i < cord; i++)
     arrx[i] = prompt(`Введіть кординати X(${i} з ${cord}) у %`,)
    console.log(arrx)
    
    for(let n = 0; n < cord; n++)
    arry[n] = prompt(`Введіть кординати Y(${n} з ${cord}) у %`,)
        console.log(arry)
    creation.addEventListener('mouseover',function(){
      console.log(arrx)
        for(let g = 0 ; g < cord ;){
            let i = 0 ;
            let n = 0 ;
            
    creation.style.left = arrx[i] + 'px'
    creation.style.top  = arry[n] + 'px'
           i++
            n++
        }
})
      
})
   
    

