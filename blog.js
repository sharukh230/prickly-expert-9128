let imagesLink = ["https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/06_Rodan_Fields_3333_V7_1100x1100-1024x1024.jpg", "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/08/280119_ROD_08_035_FINAL_1100X1100-1024x1024.jpg", "https://www.rodanandfields.com/en-us/blog/wp-content/uploads/2020/10/Niacinamide-Image.jpg"]
let sliderNoteLink = ["DOCTORS NOTE", "PRO TIPS", "SCIENCE OF SKINCARE"]
let sliderHeadLink = ["Rodan + Fields Multi-Med Therapy Approach", "With The Right Lash Care, You Won’t Miss Your Extensions", "Why Dermatologists Recommend Niacinamide Skincare"]
let sliderParaLink = ["OUR FOUNDERS DISCUSS THE MAGIC BEHIND WHAT MAKES R+F SKIN CARE WORK.", "PRO-APPROVED TIPS ON HOW TO GET LASHES SO LONG YOU WON’T BELIEVE YOUR EYES.", "FROM REGULATING DIGESTION TO IMPROVING SKIN, VITAMIN B3/NIACINAMIDE IS A MUST."]
let leftclk = document.getElementById("leftBtn");
let rightclk = document.getElementById("rightBtn");
let sliderNote = document.getElementById("sliderNote")
let sliderHead = document.getElementById("sliderHead")
let sliderPara = document.getElementById("sliderPara")
let crauser = document.getElementById("crauser")

let imageState = 0;
rightclk.addEventListener("click", function () {
    imageState++;
    if (imageState === imagesLink.length) {
        imageState = 0
    }
    crauser.src = imagesLink[imageState];
    sliderNote.innerText = sliderNoteLink[imageState];
    sliderHead.innerText = sliderHeadLink[imageState];
    sliderPara.innerText = sliderParaLink[imageState];

})
leftclk.addEventListener("click", function () {
    imageState--;
    if (imageState < 0) {
        imageState = imagesLink.length - 1;
    }
    crauser.src = imagesLink[imageState]
    sliderNote.innerText = sliderNoteLink[imageState];
    sliderHead.innerText = sliderHeadLink[imageState];
    sliderPara.innerText = sliderParaLink[imageState];

})