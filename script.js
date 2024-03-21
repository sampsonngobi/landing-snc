
// // long hand
// function toggleMode(){
//     const html = document.documentElement

//     if(html.classList.contains('light')) {
//             html.classList.remove('light')

//         } 
//     else {
//             html.classList.add('light' )
//            }
// }

function toggleMode(){
    const html = document.documentElement
    
    html.classList.toggle("light")
}