

document.querySelectorAll('button').forEach(item => {
    item.addEventListener("click", handleClick);
})


function handleClick() {
    alert('The button has clicked!')
}