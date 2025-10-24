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