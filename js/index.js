    // Load your images on page-load
function preloader() {
    
const imagesPaths = [
"./img/hydroelectric.jpg",
    
"./img/biomass.jpg",
    
"./img/biofuel.jpg"
    
];
    
const images = [];
    
for (let i = 0; i < imagesPaths.length; i++) {
    
images[i] = new Image();
images[i].src = imagesPaths[i];
    
}

// Images ready to be used:
    
console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    
window.addEventListener("load", preloader);
    
    
/* Get all buttons in a NODE LIST of buttons (array like structure) */

const buttons = document.querySelectorAll('.click');
    
/* Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */

const resource = [
        
{
    
headingContent: "Hydropower",
imgUrl: "./img/hydroelectric.jpg",
imgAlt: 'hydropower image',
bodyText: "Hydroelectric force, hydropower is produced by the Earth's water cycle, including vanishing, precipitation, tides, and the power of water going through a dam. Hydropower relies upon high precipitation levels to create noteworthy measures of vitality."
    
},

{
    
headingContent: "Biomass",
imgUrl: "./img/biomass.jpg",
imgAlt: 'biomass image',
bodyText: "As of late living common materials like wood waste, sawdust and ignitable agrarian squanders can be changed over into vitality with far less ozone harming substance outflows than oil based fuel sources."

},
        
{
            
headingContent: "Biofuels",
imgUrl: "./img/biofuel.jpg",
imgAlt: 'Biofuels image',
bodyText: "Consuming biomass to deliver vitality, once in a while these inexhaustible natural materials are changed into fuel. Prominent models incorporate ethanol and biodiesel."
    
}
        
];

/* 
Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */
const container = document.querySelector('.writeup-content');
/* 

The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). 

The first content from the
resource-object will be loaded on the page load:
`<h1>${headingContent}</h1>
<img src="${imgUrl}" alt="${imgAlt}">
<p>${bodyText}</p>` */
    
/* Start your handleSelection function here. */ 

function handleSelection(event){
        
/* Remove the id active-button from the element that
contains it prior to the click-event. 
This will require the loop throught the NODE LIST of buttons. 
Inside the loop, use conditional and the element object method
hasAttribute() to check if the current button in the loop containes the id.
If it does, use element-object property removeAttribute()
to remove the id. */
        

for (let button of buttons){
    
if(button.hasAttribute('id')){

button.removeAttribute('id');
        
}
    
}

/*
Use the element-object method setAttribute() to set the id active-button 
to the currently clicked button. */

event.target.setAttribute('id', 'active-click');

/* 
Use conditional and event-object to check which button is clicked
and based on that, create HTML with the data inside the backticks:
<h1>${headingContent}</h1>
 <img src="${imgUrl}" alt="${imgAlt}">
 <p>${bodyText}</p>`
Assign this content to to your HTML-container that will 
be dynamically loaded (you already got the reference to 
this container before you started the function handleSelection) */ 

if (event.target.innerText == "Hydropower") {
container.innerHTML = `<h1>${resource[0].headingContent}</h1>

<div class="flexbox"><img src="${resource[0].imgUrl}" alt="${resource[0].imgAlt}">
<p>${resource[0].bodyText}</p></div>`;
            
}else if(event.target.innerText == "Biomass"){
container.innerHTML = `<h1>${resource[1].headingContent}</h1>

<div class="flexbox"><img src="${resource[1].imgUrl}" alt="${resource[1].imgAlt}">
<p>${resource[1].bodyText}</p></div>`;
    
}else if(event.target.innerText == "Biofuels"){
                
 container.innerHTML = `<h1>${resource[2].headingContent}</h1>
<div class="flexbox"><img src="${resource[2].imgUrl}" alt="${resource[2].imgAlt}">
 <p>${resource[2].bodyText}</p></div>`;
                
}
    
/* 
Close your handleSelection function here. */  

}


/* Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */  

for (let button of buttons){

button.addEventListener('click', handleSelection);

}
