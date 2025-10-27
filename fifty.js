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
circles.forEach((circle, index) => {

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


squiggles.forEach((squiggle, index) => {
    // gets a random number between 0 and 45 using our random function
    // from stackoverflow
    const randomNumber = random(0, 45)
    // create a bit of randomness for our animation delay
    console.log(randomNumber)


    squiggle.animate([
        // keyframes
        { transform: 'rotate(0)' },
        // here we join our random number into our rotate property
        // { transform: 'rotate(' + randomNumber + 'deg)' },
        { transform: `rotate(${randomNumber}deg)` },
        { transform: 'rotate(0)' }
    ], {
        // timing options
        // here we use the index to create a staggered animation delay
        delay: 300 * index,
        duration: 5000,
        iterations: Infinity
    });
})



// here we want to detect when our .section enters the viewport
// when it does, we want to add a class of 'in-viewport' , and
// when it exits we want to remove it again
inView('.section')
    .on('enter', section => {
        // classList.add is the same as jQury's .addClass() method
        // but the vanilaa JS version
        section.classList.add('in-viewport')
    })
    .on("exit", section => {
        section.classList.remove('in-viewport')
    });

// here we set the class  to add only once we have scroll 0.2 of 
// our section into the viewport 
inView.threshold(0.2)


// 1. we want to select all of our sections and loop through them 
// 2. in each section we want to grab the artists and shapes
// 3. for both of these we want to add transition-delay effects
// 4. we want to make sure our shapes only fade in after our artists

const sections = document.querySelectorAll('.section')
sections.forEach((section, index) => {
    // here we use querySelectorAll on our 'section' to only find 
    // elements inside of our section vs. our entire page 
    const artists = section.querySelectorAll('.lineup li')
    const shapes = section.querySelectorAll('.shape')

    artists.forEach((artist, index) => {
        const delay = index * 100
        //artist.style.transitionDelay = '${delay} ms' - означает одно и тоже
        artist.style.transitionDelay = delay + 'ms' //означает одно и тоже
    })

    // => run a function
    shapes.forEach((shape, index) => {
        // we are setting our delay up to only start once all of our 
        // artists have faded in using the .length property 
        const delay = (artists.length + index) * 100
        shape.style.transitionDelay = delay + 'ms'
    })
})


//1. whenever we click a .js-scroll link, we want to a run a function
//2. we want to stop the link from jumping straight to our section (it's default behaviour)
//3. we want to find our the href attribute and then grab that element 
//4. than scroll to it using scrollIntoView

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
    // addEventListener is just same as jQuery's .on()
    // we can listen for events on elements add then run a function
    // вместо этого function () используем это () => 
    link.addEventListener('click', (event) => {
        // using the event keyword we het an access to a snapshot of what 
        // what happend when we clicked on our link 

        // this is equivalent to return false in jQuery
        event.preventDefault()

        // here we grab the href attribute from our link 
        const href = link.getAttribute('href')
        // here we use the new scrollIntoView feature to scroll to 
        // our desired element in a smooth fashion 
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        })

    })

})