const campaign = document.querySelectorAll('.campaign')
const acodian = document.querySelectorAll('.acodian p')
for(let i of campaign){
    i.style.display = 'none'
}
campaign[0].style.display = 'block'
for(let i of acodian){
    i.style.display = 'none'
}
acodian[0].style.display = 'block'