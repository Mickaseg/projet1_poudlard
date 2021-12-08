//Menu Hamburger
const btnNavHamb = document.querySelector('#nav-bar-hamburger')

// Menu nav telephone
const navPhone = document.querySelector('.nav-bar-phone')

const body = document.querySelector('body')
btnNavHamb.addEventListener('click', () => {
    btnNavHamb.classList.toggle('active')
    navPhone.classList.toggle('phoneVisible')
    body.classList.toggle('phoneScrollStop')
})

// Animation revélation de div  (660px point de rupture)
const ratio = .1
const options ={
    root: null,
    rootMargin: '300px',
    threshold: ratio,
}

const affichage = (entries, observer) => {
    entries.forEach((entry) => {
       if (entry.intersectionRatio > ratio){
           entry.target.classList.add('reveal-visible')
           observer.unobserve(entry.target)
       } 
    })
}
const observer = new IntersectionObserver(affichage, options)
document.querySelectorAll('.reveal-left, .reveal-right').forEach(function(r) {
    observer.observe(r)
})



// Partie de Yan - Debut
// Yan Menu deroulant mobile

const menuderoulant = document.getElementById("navbar")
const wrap = document.getElementById("buttonnav")
const contenue = document.getElementById("contenuei")
contenuei.style.display = "block"

li1.addEventListener("click", function(){ 
    buttonnav.innerHTML = 'Actualités<span class="fleche"></span>'
    if (contenuei.style.display !== "block") {
        livredor.style.display = "none"
        contenuei.style.display = "block"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "none"
    }
})

li2.addEventListener("click", function(){
    buttonnav.innerHTML = `Livre d'or<span class="fleche"></span>`
    if (livredor.style.display !== "block") {
        livredor.style.display = "block"
        contenuei.style.display = "none"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "none"
    }
})

li3.addEventListener("click", function(){
    buttonnav.innerHTML = `Plan d'accès à l'école<span class="fleche"></span>`
    if (accesalecole.style.display !== "block") {
        livredor.style.display = "none"
        contenuei.style.display = "none"
        accesalecole.style.display = "block"
        offresdemplois.style.display = "none"
        reseauxsociaux.style.display = "none"
    }
})

li4.addEventListener("click", function(){
    buttonnav.innerHTML = `Offres d'emploi<span class="fleche"></span>`
    if (offresdemplois.style.display !== "block") {
        livredor.style.display = "none"
        contenuei.style.display = "none"
        accesalecole.style.display = "none"
        offresdemplois.style.display = "block"
        reseauxsociaux.style.display = "none"
    }
})

li5.addEventListener("click", function(){
    buttonnav.innerHTML = `Reseaux sociaux<span class="fleche"></span>`
    if (reseauxsociaux.style.display !== "block") {
        livredor.style.display = "none"
        contenuei.style.display = "none"
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

// livre d'or

const livredorinsert = document.getElementById("livredorinsert")
const submit = document.getElementById("livredorsubmit")



submit.addEventListener("click", function() {
    livredorinsert.style.display = "flex";
    insertext.innerHTML = `"${livredortext.value}"` 
    inserName.innerHTML = `${livredortextP.value}.`
    insertMaison.innerHTML = ` ${livredortextM.value}`

})

// Fin de Partie de Yan

//lyndia code//
let d1 = document.getElementsByClassName("kiosque");
let p1 = document.getElementById("p1");


d1.addEventListener("mouseover", () => {p1.style.display = "block";});
d1.addEventListener("mouseout", () => {p1.style.display = "none";});
