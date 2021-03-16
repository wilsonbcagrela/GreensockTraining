const frase = document.querySelector(".frase")
const play = document.querySelector(".link1")
const pause = document.querySelector(".link2")
const reverse = document.querySelector(".link3")
const speedUp = document.querySelector(".link4")
const speedDown = document.querySelector(".link5")

const timeline = gsap.timeline( {defaults: {duration: 1}})

timeline
    .from("img", {opacity: 0, scale: 0.3, ease: "bounce" })
    .to("img", {backgroundColor: "#98FB98", borderRadius: "20%", border: "5px solid black"})
    .from(".circle", {opacity: 0, y: 150, stagger:0.25})



frase.addEventListener("click", () =>{

    gsap.from(".link", {duration: 2,opacity: 0, y: "random(-200, 200)", ease:"elastic"})
})

play.addEventListener("click", () => {
    timeline.play();
})
pause.addEventListener("click", () => {
    timeline.pause();
})
reverse.addEventListener("click", () => {
    timeline.reverse();
})
speedUp.addEventListener("click", () => {
    timeline.timeScale(2);
})
speedDown.addEventListener("click", () => {
    timeline.timeScale(0.5);
})
