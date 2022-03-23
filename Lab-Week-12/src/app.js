let selection = document.querySelector(".one")
console.log(selection)

function darkmode () {
    let change = document.querySelector(".light-theme")
    change.classList.remove("light-theme")
    change.classList.add("dark-theme")
}

darkmode()