

const imageInput = document.getElementById("image-input");
let imageSection = document.querySelector(".images");
// const imagesArray = [];
let flag = 0;

imageInput.addEventListener('change',() => {
    if(imageInput.files[0]){
        imageSection.innerHTML += `
        <div>
        <img class="delete" src="" alt="uploadedImage">
        <img class="image${flag} image" src="" alt="uploadedImage">
        </div>`;
        document.querySelector(`.image${flag}`).src = URL.createObjectURL(imageInput.files[0]);
        flag++;
        console.log(imageInput.files);
    }
});