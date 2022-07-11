// redirecting to "preetsojitra.me"
const currentUrl = "http://preetsojitra.me/Personal_Portfolio/"
if (window.location.href == currentUrl) {
  window.location.replace("https://preetsojitra.me/")
}

// Creating Animating Background

const animation = document.querySelector(".animation")
let dataRate = []

// create square
class Square {
  constructor(size, top, left) {
    this.width = size
    this.height = size
    this.bottomLeft = [top, left]
    this.bottomRight = [top, top + size]
    this.topLeft = [top + size, left]
    this.topRight = [top + size, left + size]
  }
}

const squares = [
  new Square(10, 24, 35),
  new Square(40, 250, 105),
  new Square(25, 90, 259),
  new Square(28, 25, 500),
  new Square(69, 600, 300),
  new Square(35, 186, 375),
  new Square(31, 378, 246),
  new Square(43, 287, 769),
  new Square(43, 111, 653),
  new Square(17, 318, 562),
  new Square(7, 536, 696),
  new Square(24, 486, 43),
  new Square(37, 455, 433),
  new Square(22, 37, 859),
  new Square(47, 163, 958),
  new Square(15, 396, 906),
  new Square(33, 687, 600),
  new Square(28, 463, 805),
  new Square(25, 412, 632),
  new Square(25, 75, 1178),
  new Square(35, 250, 1325),
  new Square(25, 293, 1102),
  new Square(48, 422, 1203),
  new Square(33, 558, 1000),
  new Square(48, 618, 788),
  new Square(38, 656, 1136),
  new Square(25, 550, 1396),
]

// draw all square
function drawSquare() {
  for (let i = 0; i < squares.length; i++) {
    const square = document.createElement("div")
    square.classList.add("particle")
    square.style.height = squares[i].height + "px"
    square.style.width = squares[i].width + "px"
    square.style.top = squares[i].bottomLeft[0] + "px"
    square.style.left = squares[i].bottomLeft[1] + "px"
    animation.appendChild(square)
  }
}
drawSquare()

const particles = document.querySelectorAll(".particle")
const arrayParticle = Array.from(particles)

// generating dataRate for scrolling
for (let i = 0; i < arrayParticle.length; i++) {
  const scrollRate = Math.random() * 2 + 1
  dataRate.push(scrollRate)
}

// setting data rate
particles.forEach((div, index) => {
  div.setAttribute("data-rate", dataRate[index])
})

// adding event
window.addEventListener("scroll", bgAnimation)

// removing event
if (screen.width < 1000) {
  window.removeEventListener("scroll", bgAnimation)
}

// Animation function
function bgAnimation() {
  let Yoffset = window.pageYOffset

  for (let i = 0; i < arrayParticle.length; i++) {
    const div = arrayParticle[i]
    let rate = div.dataset.rate
    let positionX = Yoffset * rate
    const divPosition = div.style.left
    const newDivPosition = divPosition.replace("px", " ")
    const leftPosition = parseInt(newDivPosition)
    if (leftPosition < 768) {
      div.style.transform = `translateX(${positionX}px) rotate(${Yoffset}deg)`
    } else {
      div.style.transform = `translateX(-${positionX}px) rotate(${Yoffset}deg)`
    }
  }
}

// Typing effect
const options = {
  strings: [
    "Front-End Developer ^800",
    "Freelancer ^800",
    "Programmer ^800",
    "Student ^800",
  ],
  typeSpeed: 40,
  backSpeed: 30,
  backDelay: 1000,
  loop: true,
  autoInsertCss: true,
}

const typed = new Typed(".secondary-heading", options)

// ScrollReveal
ScrollReveal().reveal(".education-cards", { delay: 70, reset: true })

// Scroll Down Arrow
const aboutMe = document.getElementById("scroll-about-me")
const arrow = document.querySelector(".scrollTo")

// const aboutMeHeight = aboutMe.getBoundingClientRect().height

const aboutMeHeight = aboutMe.offsetTop

arrow.addEventListener("click", () => {
  window.scrollTo(0, aboutMeHeight)
})

// Navbar
const toggleNavBtn = document.querySelector(".toggleNavbtn")
const closeBtn = document.querySelector(".closeBtn")
const navbar = document.querySelector(".btnNav")

const navUl = document.querySelector(".navUl")
const navItems = Array.from(navUl.children)

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navbar.classList.remove("visibleNav")
  })
})

toggleNavBtn.addEventListener("click", () => {
  navbar.classList.toggle("visibleNav")
})
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("visibleNav")
})
