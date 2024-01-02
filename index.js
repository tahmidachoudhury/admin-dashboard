const sidebarElements = document.querySelectorAll(".element");
const icons = document.querySelectorAll("i")


sidebarElements.forEach(x => x.addEventListener("mouseenter", function() {
    sidebarElements.forEach(e => {
        let div = x.querySelector('i');
        div.classList.add("fa-shake");
    })
}))

sidebarElements.forEach(x => x.addEventListener("mouseout", function() {
    sidebarElements.forEach(e => {
        let div = x.querySelector('i');
        div.classList.remove("fa-shake");
    })
}))
