// const images = document.querySelectorAll('.slider img');
// const thumbnails = document.querySelectorAll('.slider-thumbnail');

// thumbnails.forEach(thumbnail => {
// thumbnail.addEventListener('click', () => {
// const index = thumbnail.getAttribute('data-index');
// images.forEach(image => image.style.display = 'none');
// images[index].style.display = 'block';
// });
// });



// --------
const MainImageContainer = document.querySelector('#main .images-part .featured-img');
const SecondaryImages = document.querySelectorAll('#main .sc-imgs .c-img');

window.addEventListener('load' , ()=>{
    MainImageContainer.style.height =  `${MainImageContainer.offsetWidth}px` ;

    SecondaryImages.forEach(img =>{
        img.style.height =  `${img.offsetWidth}px` ;
    })
})
window.addEventListener('resize' , ()=>{
    MainImageContainer.style.height =  `${MainImageContainer.offsetWidth}px` ;

    SecondaryImages.forEach(img =>{
        img.style.height =  `${img.offsetWidth}px` ;
    })
})


SecondaryImages.forEach(im => {
    // im.addEventListener('mousemove' , () =>{
    //     console.log('k')
    //     MainImageContainer.style.backgroundImage =  `${im.style.backgroundImage}`;
    // });
    im.addEventListener('click' , () =>{
        SecondaryImages.forEach(i =>{
            i.classList.remove('active');
        })
        im.classList.add('active')
        MainImageContainer.style.backgroundImage =  `${im.style.backgroundImage}`;
    });
})

