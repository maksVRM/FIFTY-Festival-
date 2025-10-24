// here we make a function called makeMarquee
function makeMarquee() {
    const title = 'FIFTY Music Festival — November 10–12, Desert Valley'

    // an arrary is a list of things
    // here we make a new empty array with 50 spaces in it
    // then we fill it with the text from our title (50 times)
    // we then join them all together as one text string using a ' --- ' 
    const marqueeText = new Array(50).fill(title).join(' --- ')

    // 1. we want to grab our .marquee span from the html
    // 2. we want set our repaeting title as the content

    // document.querySelector and document.querySelectorAll are the same as $ in JQuery
    const marquee = document.querySelector('.marquee span')
    // using innerHTML let us set the content inside an element 
    marquee.innerHTML = marqueeText
}

// here we actually run our makeMarquee function
makeMarquee()

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


// here we grab a;; our the .circles from the html
const circles = document.querySelectorAll('.circle')

// circles returns us an array so we need to loop through it 
// inside of the forEach we get access to each individual element
// along with it's index
circles.forEach(function (circle, index) {

    // in here we get acces to each one as 'circle'
    circle.animate([
        // keyframes
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
    ], {
        // timing options
        // here we use the index to create a staggered animation delay
        delay: 300 * index,
        duration: 3000,
        iterations: Infinity
    });
})


const squiggles = document.querySelectorAll('.squiggle')



squiggles.forEach(function (squiggle, index) {
    // gets a random number between 0 and 45 using our random function
    // from stackoverflow
    const randomNumber = random(0, 45)
    // create a bit of randomness for our animation delay
    console.log(randomNumber)


    squiggle.animate([
        // keyframes
        { transform: 'rotate(0)' },
        // here we join our random number into our rotate property
        { transform: 'rotate(' + randomNumber + 'deg)' },
        { transform: 'rotate(0)' }
    ], {
        // timing options
        // here we use the index to create a staggered animation delay
        delay: 300 * index,
        duration: 5000,
        iterations: Infinity
    });
})
