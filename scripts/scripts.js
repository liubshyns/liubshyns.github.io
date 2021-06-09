const imageLoader = () => {
    const imageLoader = document.createElement('div')
    imageLoader.innerHTML = `<div class="spinner-border text-warning" role="status">
    <span class="sr-only">Loading...</span>
  </div>`
  return imageLoader
}

const showImage = (link) => {
    const cont = document.createElement('div')
    cont.className = 'art'
    cont.inner = imageLoader();

    const image = document.createElement('img')
    image.src = link;
    image.className = "art";
    
    image.onload = () => {cont.inner = image};
    return cont
};

const AllImages = (classname = "artGallery") => {
    element = document.querySelector(".artGallery");
}
// window.onload= () => {
//     document.querySelector('.art1').innerHTML = showImage('./../static/art/1.jpg').innerHTML
// console.log(document.getElementsByClassName('art1').innerHTML)
// }
