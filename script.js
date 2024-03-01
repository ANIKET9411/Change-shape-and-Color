let circle=document.querySelector('.circle');
let rectangle=document.querySelector('.rectangle');
let color=document.querySelector('.color');
let shape=document.querySelector('.shape');
let triangle=document.querySelector('.triangle');
let square=document.querySelector('.square');
let body=document.querySelector('body');
let colorpallete=['#620352','#923805','#415342','#313780','#488023','#124107','#258568','#789981','#556767','#665241','#681636','#574808'];

body.style.display='flex';
body.style.flexDirection='column';
body.style.alignItems='center';
body.style.justifyContent='center';
body.style.height='100vh';

circle.style.display='flex';
circle.style.justifyContent='center';
circle.style.alignItems='center';
circle.style.height='200px';
circle.style.width='200px';
circle.style.borderRadius='50%';
circle.style.backgroundColor='purple';
circle.style.textalign='center';

square.style.width='120px';
square.style.height='70px';
// square.style.border='2px solid red';
square.style.display='none';
square.style.backgroundColor='yellow';

rectangle.style.height='100px';
rectangle.style.backgroundColor='white';
rectangle.style.width='100px';

triangle.style.display='none';
color.style.marginTop='20px';
shape.style.marginTop='20px';
color.addEventListener('click',function(){
let code=Math.floor(Math.random() *colorpallete.length);
circle.style.backgroundColor=colorpallete[code];
// circle.innerText=code;
console.log(colorpallete[code]);
});
let count=0;

shape.addEventListener('click',function(){
    count=Math.floor(Math.random()*3);
    console.log(count);
    if(count%3==1)
    {
        rectangle.style.display='none';
        triangle.style.display='block';
        square.style.display='none';
    }
    else if(count%3==2)
    {
        rectangle.style.display='none';
        triangle.style.display='none';
        square.style.display='block';
    }
    else{
        rectangle.style.display='block';
        triangle.style.display='none';
        square.style.display='none';
    }
    });