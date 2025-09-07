// Global Scope/////////////////=====
const cardsSection = document.getElementById('cardsSection')


//load all trees in cards container////
// const allTreesgetApi = () => {  //allPlants api
//     fetch('https://openapi.programming-hero.com/api/plants')
//         .then((data) => data.json())
//         .then((allPlants) => allTreeloadScreen(allPlants.plants))
// }
// allTreesgetApi()  //api call

//Fetch aside buttons data
const asideButtonsGet = () => {//Fetch aside buttons data
    fetch('https://openapi.programming-hero.com/api/categories')
        .then((url) => url.json())
        .then((data) => buttonArray(data.categories))
}
asideButtonsGet() //api call

const buttonArray = (asideButtons) => {//Fetch aside buttons data
    for (const asideButton of asideButtons) {
        // console.log(asideButton.category_name);
        const createAsideButton = document.createElement('h1')
        createAsideButton.innerHTML = `
        <h1 class="h-10 w-full" onclick="plantsBYCatagories(${asideButton.id})">${asideButton.category_name}</h1>
                `
        document.getElementById('dynamicSideButtons').append(createAsideButton)   //show card on display
    }
}


// All trees data load
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
                        <p class="w-auto px-5 flex items-center h-8 bg-green-200 rounded-full text-center">${plantCard.category}</p>
                        <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plantCard.price}</h1>
                    </div>
                    <button class="btn btn-active btn-accent w-full h-10">Add to Cart</button>
            </div>
`
        document.getElementById('cardsSection').append(createCard)
    }

}



// Plants by Catagories
const plantsBYCatagories = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`).
        then((res) => res.json()).then((res) => loadCatagoriCardsOndisplay(res.plants))
}

// show Catagori wise cards on display
const loadCatagoriCardsOndisplay = (cards) => {
    for (const card of cards) {
        // console.log(card);
        cardsSection.innerHTML = ""
        const createCard = document.createElement('div')
        createCard.innerHTML = `
            <div class="card w-73 h-auto py-2 px-2 flex flex-col space-y-1 bg-white">
                <img class="h-48 w-full rounded-md" src=${card.image} alt="" srcset="">
                    <h1 class="font-bold w-full">${card.name}</h1>
                    <p class=" text-[12px] h-25 text-justify">${card.description}</p>
                    <div class="plantTypeAndPrice w-full flex items-center justify-between mb-5">
                        <p class="w-auto px-5 flex items-center h-8 bg-green-200 rounded-full text-center">${card.category}</p>
                        <h1><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${card.price}</h1>
                    </div>
                    <button class="btn btn-active btn-accent w-full h-10">Add to Cart</button>
            </div>
`
        document.getElementById('cardsSection').append(createCard)
    }

}


//All tree calls
const allTrees = () => {
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((data) => data.json())
        .then((allPlants) => {
            const cards = (allPlants.plants)
            for (const plantCard of cards) {
                console.log("card in all Trees", plantCard);
                cardsSection.innerHTML = ""

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






buttonArray()    //কেন সাইডের বাটন গুলোকে সবার শেষে কল করা হল??
allTreeloadScreen()  //all cards load




