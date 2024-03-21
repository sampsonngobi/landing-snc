
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

    //select the image
    const img = document.querySelector("#profile img")

    //substitute image 
    if(html.classList.contains('light')) {

    //if  it is light, select the ligh image
        img.setAttribute("src", 'images/Profile.png')
    //if not use the normal image 
    }else{
        img.setAttribute("src", "images/profile-light.png")   
    }


}