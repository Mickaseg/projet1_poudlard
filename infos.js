const reponse = document.querySelectorAll('.faqContainerReponse');
console.log(reponse);


const container = document.querySelectorAll('.faqContainer');
console.log(container)

container.forEach( element => element.addEventListener('click',function(){
   if (element.lastElementChild.style.display==='none'){
       element.lastElementChild.style.display='block'
   }else{
       element.lastElementChild.style.display='none'
   }
}))

const champRecherche = document.querySelector('.faqSearchBar')
/*console.log(champRecherche)*/
const questions = document.querySelectorAll('.faqContainerQuestion')
/*console.log(questions[1].innerText)*/
console.log(champRecherche.value)


champRecherche.addEventListener('input',() => questions.forEach((question)=>{
    const tabQuestion = question.innerHTML.split(' ');
    console.log(tabQuestion);
    console.log(question)
 
    if (tabQuestion.some((element)=> element == champRecherche.value)){
        question.style.color='red'; 
    }
}))
     