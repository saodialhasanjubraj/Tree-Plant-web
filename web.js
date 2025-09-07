// Global Scope/////////////////=====
const cardsSection = document.getElementById('cardsSection')


//load all trees in cards container////
const allTreesgetApi = () => {  //allPlants api
    fetch('https://openapi.programming-hero.com/api/plants')
        .then((data) => data.json())
        .then((allPlants) => allTreeloadScreen(allPlants.plants))
}
allTreesgetApi()  //api call

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
        <h1 class="h-10 w-full">${asideButton.category_name}</h1>
                `
        const allPlantsSideButton = document.getElementById('dynamicSideButtons').append(createAsideButton)
        plantsBYCatagories(asideButton.id)  //calling for get all buttons id

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

const plantsBYCatagoriesApi = () => {
    fetch('https://openapi.programming-hero.com/api/category/3')
        .then((res) => res.json())
        .then((data) => plantsBYCatagories(data))
}
plantsBYCatagoriesApi()

const plantsBYCatagories = (id) => {
    fetch(`https://openapi.programming-hero.com/api/category/${id}`).
        then((res) => res.json()).then((res) => console.log("rescalling", res))

}




buttonArray()    //কেন সাইডের বাটন গুলোকে সবার শেষে কল করা হল??
allTreeloadScreen()  //all cards load




