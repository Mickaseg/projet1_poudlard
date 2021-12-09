const reponse = document.querySelectorAll('.faqContainerReponse');
console.log(reponse);

const question = document.querySelectorAll('.faqContainerQuestion');
console.log(question);

const container = document.querySelectorAll('.faqContainer');
console.log(container)
/*for(let i=0 ; i < question.lenght ; i++ ){
    question[i].addEventListener('click', () => {
        console.log(reponse[i])})
    
}*/
container.forEach( element => element.addEventListener('click',function(){
   if (element.lastElementChild.style.display==='none'){
       element.lastElementChild.style.display='block'
   }else{
       element.lastElementChild.style.display='none'
   }
}))

