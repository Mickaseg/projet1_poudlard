const btnNavHamb = document.querySelector('#nav-bar-hamburger')

btnNavHamb.addEventListener('click', () => btnNavHamb.classList.toggle('active'))


// Yan Menu deroulant mobile

const menuderoulant = document.getElementById("navbar")
const wrap = document.getElementById("buttonnav")
const contenue = document.getElementById("contenuei")

actualite.style.display = "block"

li1.addEventListener("click", function(){
    if (actualite.style.display !== "block") {
        livredor.style.display = "none"
        actualite.style.display = "block"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "none"
    }
})

li2.addEventListener("click", function(){
    if (livredor.style.display !== "block") {
        livredor.style.display = "block"
        actualite.style.display = "none"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "none"
    }
})

li3.addEventListener("click", function(){
    if (accesalecole.style.display !== "block") {
        livredor.style.display = "none"
        actualite.style.display = "none"
        accesalecole.style.display = "block"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "none"
    }
})

li4.addEventListener("click", function(){
    if (offresdemplois.style.display !== "block") {
        livredor.style.display = "none"
        actualite.style.display = "none"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "block"
        reseauxsociaux.style.display = "none"
    }
})

li5.addEventListener("click", function(){
    if (reseauxsociaux.style.display !== "block") {
        livredor.style.display = "none"
        actualite.style.display = "none"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "block"
    }
})



menuderoulant.style.display = "none"

wrap.addEventListener("click", function(){
    if (menuderoulant.style.display === "none") {
        menuderoulant.style.display = "block" 
    }
    else {
        menuderoulant.style.display = "none"
    }
})

menuderoulant.addEventListener("click", function(){
    if (menuderoulant.style.display === "block") {
        menuderoulant.style.display = "none" 
    }
})