
// -------------------------------------------------------------------------------------------------------------

// Modification n°1
// Écris une fonction changeTitles() qui va :

// Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
// Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
// Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en l'appelant en bas avec un changeTitles();. Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.

function changeTitles(){
    let title = document.getElementsByClassName("jumbotron-heading")[0];
    title.innerHTML = "Ce que j'ai appris à THP";
    let subtitle = document.getElementsByClassName("lead text-muted")[0];
    subtitle.innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
// -------------------------------------------------------------------------------------------------------------
// Modification n°2
// Ecris une fonction changeCallToActions() qui va:
// Changer le texte du bouton "Main call to action" en "OK je veux tester !"
// Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
// Changer le texte du bouton "Secondary action" en "Non Merci"
// Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"

function changeCallToActions(){
    var main_button = document.getElementsByClassName("btn-primary")[0] ;
    main_button.innerHTML = "OK je veux tester !" ;
    main_button.setAttribute("href", "http://www.thehackingproject.org") ;
    var second_button = document.getElementsByClassName("btn-secondary")[0] ;
    second_button.innerHTML = "Non Merci" ;
    second_button.setAttribute("href", "https://www.pole-emploi.fr/accueil/" ) ;
}
// -------------------------------------------------------------------------------------------------------------

// Modification n°3
// Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :

// Change "Album" par "The THP Experience" ;
// Change la taille du texte pour le passer en 2em.

function changeLogoName(){
    var logo = document.getElementsByTagName("strong")[0] ;
    logo.innerHTML = "The THP Experience" ;
    logo.style.fontSize = "2em" ;
}

// -------------------------------------------------------------------------------------------------------------

// Modification n°4
// Écris une fonction populateImages() qui va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant :

// let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
// Une petite boucle des familles va être utile ici.





function populateImages(){
    var img_cards = document.getElementsByClassName("card-img-top") ;
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"] ;
    for(i = 0 ; i < 9 ; i++ ){ 
        img_cards[i].dataset.src = imagesArray[i] ;
    }
}

// -------------------------------------------------------------------------------------------------------------

// Modification n°5
// Écris une fonction deleteLastCards() qui va supprimer les 3 dernières cards via une boucle. Je donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de ne pas les lire.

// Coups de main sur cette modif
// Pour les lire, surligne le texte ci-dessous en le sélectionnant (c'est écrit blanc sur blanc 😏 )

// Attention si ta boucle supprime des éléments d'une liste : cela peut modifier les indices des éléments. Illustration : si tu supprimes le 7ème élément d'une liste de 9, l'élément numéro 8 passe alors au numéro 7 et le numéro 9 passe au numéro 8. Ça peut faire foirer ta boucle 🤭
// https://developer.mozilla.org/fr/docs/Web/API/ChildNode/remove 😘


function deleteLastCards(){
    var card = document.getElementsByClassName("card") ;
    for(i = 6 ; i < 9 ; i++ ){
        card[6].remove() ;
    }
}

// -------------------------------------------------------------------------------------------------------------

// Modification n°6
// Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :

// Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
// Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
// Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
// Essaye de mettre ça dans une boucle.


function changeCardsText(){
    var card = document.getElementsByClassName("card-text") ;
    var array_new_text = [`Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web" `,` Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML" ` , `Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."`] ;
    for(i = 0 ; i<3 ; i++){
        card[i].innerHTML = array_new_text[i] ;
        }
}

// -------------------------------------------------------------------------------------------------------------

// Modification n°7
// Écris une fonction changeViewButtons() qui va modifier tous les boutons "View" des cards pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6 modifications une à une ... faut de la boucle là !

function changeViewButtons(){
    for(i = 0 ; i < 6 ; i++){
        let btn_group = document.getElementsByClassName("btn-group")[i] ;
        let btn_view = btn_group.childNodes[1] ; 
        btn_view.classList.remove("btn-outmline-secondary") ;
        btn_view.classList.add("btn-success") ;
        btn_view.style.color = "white"
        }
}


// -------------------------------------------------------------------------------------------------------------

// Modification n°8
// Allez, on finit sur une modification un peu tordue :

// Rajoute une <div> portant la classe row juste après celle qui contient déjà les cards actuelle.
// Déplace la 3ème card (JS) de la première <div class="row"> vers la deuxième que tu viens de créer.
// Elle est pas belle cette pyramide inversée en front 👳? (comment ça "obsédés par les pyramides" ?).

// Créer un élément HTML avec document.createElement(element)
// Rajouter un élément HTML avecdocument.appendChild(element)


function modifTordue(){
    var new_div = document.createElement("div") ; 
    var row1 = document.getElementsByClassName("row")[1] ;
    var parent_div = document.getElementsByClassName("row")[1].parentNode ;
    parent_div.insertBefore(new_div, row1.nextSibling) ;
    new_div.classList.add("row")
    new_div.innerHTML = "Coucou la div" ;
}
