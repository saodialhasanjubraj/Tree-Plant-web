//* Global Scope>
const cardsSection = document.getElementById('cardsSection')

//*load all trees in cards container////
const allTreesgetApi = () => {  //allPlants api
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((data) => data.json())
        .then((allPlants) => allTreeloadScreen(allPlants.plants))
}
allTreesgetApi()  //api call

//*Fetch aside buttons data
const asideButtonsGet = () => {//Fetch aside buttons data
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((url) => url.json())
        .then((data) => buttonArray(data.categories))
}
asideButtonsGet() //api call

const buttonArray = (asideButtons) => {//*Show all aside buttons
    for (const asideButton of asideButtons) {
        // console.log(asideButton);
        // console.log(asideButton.category_name);        
        const createAsideButton = document.createElement('h1')
        createAsideButton.innerHTML = `
        <h1 class="h-10 w-full flex items-center justify-start hover:cursor-pointer hover:border-b-2 hover:duration-100 hover:border-zinc-500 removeActivClass" id="asideButton_${asideButton.id}" onclick="plantsBYCatagories(${asideButton.id})">${asideButton.category_name}</h1>
                `
        document.getElementById('dynamicSideButtons').append(createAsideButton)   //show card on display
    }

}

//* All trees data load
const my_modal_1 = document.getElementById('my_modal_1')
const allTreeloadScreen = (allPlants) => {
    cardsSection.innerHTML = ""
    for (const plantCard of allPlants) {
        // console.log("planted card calling:", plantCard);
        const createCard = document.createElement('div')
        createCard.innerHTML = `
            <div class="card w-73 h-auto py-2 px-2 flex flex-col space-y-1 bg-white">
                <img class="h-48 w-full rounded-md" src=${plantCard.image} alt="" srcset="">
                    <h1 class="font-bold w-full">${plantCard.name}</h1>
                    <p class=" text-[12px] h-25 text-justify">${plantCard.description}</p>
                    <div class="plantTypeAndPrice w-full flex items-center justify-between mb-5">
                        <p onclick="my_modal_1.showModal()" class="w-auto px-5 flex items-center h-8 bg-green-200 rounded-full text-center">${plantCard.category}</p>
                        <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plantCard.price}</h1>
                    </div>
                    <button class="btn btn-active btn-accent w-full h-10">Add to Cart</button>
            </div>
`
        document.getElementById('cardsSection').append(createCard)
    }
}

const removeActivClassAll = () => {
    const removeActiveall = document.querySelectorAll(".removeActivClass")
    console.log(removeActiveall);
    removeActiveall.forEach(btn => btn.classList.remove("active")) //! remove active class
}


// *Plants by Catagories
const plantsBYCatagories = (id) => {  //*onclick fuction call in buttonArray Function and get (id) from there
    fetch(`https://openapi.programming-hero.com/api/category/${id}`).
        then((res) => res.json()).then((res) => {
            loadCatagoriCardsOndisplay(res.plants)
            removeActivClassAll()   //! remove all active class
            const clickBtn = document.getElementById(`asideButton_${id}`)
            clickBtn.classList.add('active')  //* add active call specific id that clicked
            // console.log(clickBtn);
        })
}

//* show Catagori wise cards on display
const loadCatagoriCardsOndisplay = (cards) => {
    cardsSection.innerHTML = ""   // *Remember:>> Always card parent div take place outside (for) methood
    for (const card of cards) {
        console.log("catagoricard", card);
        // cardsSection.innerHTML = ""   //!কার্ডের ইনার এইচটিএমএল লুপের ভিতর রাখরে শেষের টা দেখায় কেন?
        const createCard = document.createElement('div')
        createCard.innerHTML = `
            <div class="card w-73 h-auto py-2 px-2 flex flex-col space-y-1 bg-white">
                <img class="h-48 w-full rounded-md" src=${card.image} alt="" srcset="">
                    <h1 class="font-bold w-full">${card.name}</h1>
                    <p class=" text-[12px] h-25 text-justify">${card.description}</p>
                    <div class="plantTypeAndPrice w-full flex items-center justify-between mb-5">
                        <p onclick="my_modal_1.showModal()" class="w-auto px-5 flex items-center h-8 bg-green-200 rounded-full text-center">${card.category}</p>
                        <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${card.price}</h1>
                    </div>
                    <button class="btn btn-active btn-accent w-full h-10">Add to Cart</button>
            </div>
`
        document.getElementById('cardsSection').append(createCard)
    }
    showModalCards(cards)
}

//*All tree calls   (Only for All Tree button)
const allTrees = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((data) => data.json())
        .then((allPlants) => {
            const cards = (allPlants.plants)
            cardsSection.innerHTML = ""  //! Remember: always make this container innerhtml outsied of for loop>>>
            for (const plantCard of cards) {
                console.log("card in all Trees", plantCard);
                const createCard = document.createElement('div')
                createCard.innerHTML = `
            <div class="card w-73 h-auto py-2 px-2 flex flex-col space-y-1 bg-white">
                <img class="h-48 w-full rounded-md" src=${plantCard.image} alt="" srcset="">
                    <h1 class="font-bold w-full">${plantCard.name}</h1>
                    <p class=" text-[12px] h-25 text-justify">${plantCard.description}</p>
                    <div class="plantTypeAndPrice w-full flex items-center justify-between mb-5">
                        <p class="w-auto px-5 flex items-center h-8 bg-green-200 rounded-full text-center">${plantCard.category}</p>
                        <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plantCard.price}</h1>
                    </div>
                    <button class="btn btn-active btn-accent w-full h-10">Add to Cart</button>
            </div>
`
                document.getElementById('cardsSection').append(createCard)
            }

        })

}


const showModalCards = (cards) => {
    showModalContainer.innerHTML = ""
    for (const plantCard of cards) {
        const modalCard = document.createElement('div')
        modalCard.innerHTML = `
        <div class="w-250 h-300 flex items-center justify-center flex-col ">
                        <img class="h-50 w-240 rounded-md" src=${plantCard.image} alt="" srcset="">
                        <h1 class="font-bold w-full">${plantCard.name}</h1>
                        <p class=" text-[12px] h-25 text-justify">${plantCard.description}</p>
                        <div class="plantTypeAndPrice w-full flex items-center justify-between mb-5">
                            <p class="w-auto px-5 flex items-center h-8 bg-green-200 rounded-full text-center">
                                ${plantCard.category}</p>
                            <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plantCard.price}</h1>
                        </div>
                        <button class="btn btn-active btn-accent h-10">Add to Cart</button>

                    </div>
        `
        document.getElementById('showModalContainer').append(modalCard)
    }


}



buttonArray()    //কেন সাইডের বাটন গুলোকে সবার শেষে কল করা হল??
allTreeloadScreen()  //all cards load




