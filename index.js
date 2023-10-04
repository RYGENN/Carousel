
//------------- Making Carosel -------------

// import Data from './utils/carousel.js'


// const obj=document.querySelector(".container")
// const person=document.querySelector(".name")
// const review=document.querySelector('.info')
// const imageElement=document.getElementById("img-1")
// const btn=document.querySelector("button")

// const names=['Anupam Mahato,Web Developer','Manish Paul,Writer','Thor,Hero','Sivaji,Warrior','Netaji Bose,Fighter']

// const imageSources=['./photos/self-2-min.jpg','./photos/vin1.jpg','./photos/vin2.jpg','./photos/images.jpeg','./photos/images2.jpeg']

// const content = [
 // "Anupam Mahato is a true visionary and a remarkable individual. His dedication and passion for innovation have left an indelible mark on every project he undertakes. With a keen intellect and a tireless work ethic, he consistently delivers outstanding results. Anupam's leadership and collaborative spirit inspire those around him to excel. His contributions are invaluable, making him an asset to any team or endeavor",
// "Manish Paul is a versatile and charismatic entertainer who effortlessly captivates audiences with his infectious energy and wit. His remarkable hosting skills have made him a household name in the entertainment industry. Manish's ability to connect with people and bring laughter to any event is truly commendable. He's a true showman who leaves a lasting impression with his charming personality and impeccable stage presence. Manish Paul is undoubtedly a shining star in the world of entertainment.",
// "Thor, the God of Thunder, is an unparalleled hero. His mighty hammer, Mjölnir, wields the power to vanquish any foe. With unwavering courage, he defends the realms from the darkest threats. Thor's noble heart and unyielding dedication inspire hope in the face of adversity. A true legend, he embodies strength, honor, and the enduring spirit of a hero.",
// "Sivaji, a legendary warrior, displayed unparalleled valor and strength on the battlefield. His unwavering courage inspired his comrades and struck fear into the hearts of his adversaries. With a fearless spirit and indomitable determination, he led his troops to victory, defending his kingdom with unmatched prowess. Sivaji's strategic brilliance and unyielding dedication to his people established him as a true warrior-hero, leaving a lasting legacy of honor and bravery that continues to inspire generations. His name shall forever be synonymous with the epitome of warrior excellence.",
// "Netaji Subhas Chandra Bose was an indomitable fighter whose unwavering determination inspired a nation's quest for freedom. His resolute spirit and fearless leadership ignited a revolution against colonial rule. With a vision that transcended boundaries, he formed the Indian National Army, a force that struck fear into the hearts of the British Empire. Netaji's audacious courage and commitment to India's cause made him a symbol of unyielding resistance. His legacy as a fighter for liberty and justice remains an enduring inspiration for generations."
// ]

// let imageIndex=0;
// let nameIndex=0;
// let contentIndex=0;

// console.log(btn)

// btn.addEventListener('click',()=>{
//     imageIndex=(imageIndex + 1)% imageSources.length;

//     imageElement.src=imageSources[imageIndex];

//     nameIndex=(nameIndex + 1)% names.length;

//     person.textContent=names[nameIndex];

//     console.log(imageElement.src)

//     contentIndex=(contentIndex + 1)%content.length;

//     review.textContent=content[contentIndex]

// })

//- updated (4/10/23)      


const person = document.querySelector(".name")
const details = document.querySelector('.info')
const imageElement = document.getElementById("img-1")
const btn = document.querySelector("button")

const Data = [
    {
        name: "Anupam Mahato,Developer",
        img: "./photos/self-2-min.jpg",
        content: "Anupam Mahato is a true visionary and a remarkable individual. His dedication and passion for innovation have left an indelible mark on every project he undertakes. With a keen intellect and a tireless work ethic, he consistently delivers outstanding results. Anupam's leadership and collaborative spirit inspire those around him to excel. His contributions are invaluable, making him an asset to any team or endeavor",

    },
    {
        name: "Manish Paul,Writer ",
        img: "./photos/vin1.jpg ",
        content: "Manish Paul is a versatile and charismatic entertainer who effortlessly captivates audiences with his infectious energy and wit. His remarkable hosting skills have made him a household name in the entertainment industry. Manish's ability to connect with people and bring laughter to any event is truly commendable. He's a true showman who leaves a lasting impression with his charming personality and impeccable stage presence. Manish Paul is undoubtedly a shining star in the world of entertainment. "

    },
    {
        name: "Thor,Hero ",
        img: "./photos/vin2.jpg ",
        content: "Thor, the God of Thunder, is an unparalleled hero. His mighty hammer, Mjölnir, wields the power to vanquish any foe. With unwavering courage, he defends the realms from the darkest threats. Thor's noble heart and unyielding dedication inspire hope in the face of adversity. A true legend, he embodies strength, honor, and the enduring spirit of a hero. "

    },
    {
        name: "Sivaji,Warrior ",
        img: "./photos/images.jpeg ",
        content: "Sivaji, a legendary warrior, displayed unparalleled valor and strength on the battlefield. His unwavering courage inspired his comrades and struck fear into the hearts of his adversaries. With a fearless spirit and indomitable determination, he led his troops to victory, defending his kingdom with unmatched prowess. Sivaji's strategic brilliance and unyielding dedication to his people established him as a true warrior-hero, leaving a lasting legacy of honor and bravery that continues to inspire generations. His name shall forever be synonymous with the epitome of warrior excellence. "

    },
    {
        name: "Netaji Bose,Fighter ",
        img: "./photos/images2.jpeg ",
        content: "Netaji Subhas Chandra Bose was an indomitable fighter whose unwavering determination inspired a nation's quest for freedom. His resolute spirit and fearless leadership ignited a revolution against colonial rule. With a vision that transcended boundaries, he formed the Indian National Army, a force that struck fear into the hearts of the British Empire. Netaji's audacious courage and commitment to India's cause made him a symbol of unyielding resistance. His legacy as a fighter for liberty and justice remains an enduring inspiration for generations. "

    }
]


let currentIndex = 0;

btn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % Data.length;
    // console.log(currentIndex)
    let item = Data[currentIndex]
    // console.log(item)
    imageElement.src = item.img;
    person.textContent = item.name;
    details.textContent = item.content;
})