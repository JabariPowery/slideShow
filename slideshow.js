function slideLayout(title, image, description) {
  this.title = title;
  this.image = image;
  this.description = description;
}

const broccoliSlideData = new slideLayout(
  "broccoli",
  "images/broccoli.webp",
  "Broccoli microgreens are rich in vitamin c like its adult counterpart with the difference being that the microgreens contain around 40 times the amount of vitamin c in comparison. These mild and crunchy sprouts are also abundant with magnesium, copper, manganese, and zinc."
);
const arugulaSlideData = new slideLayout(
  "arugula",
  "images/arugula.png",
  "Arugula microgreens are sure to keep your bones healthy because of the high quantity of calcium present in each bite. These microgreens have a tangy and peppery taste that are packed with antioxidants, minerals, vitamins, and phytochemicals."
);
const radishSlideData = new slideLayout(
  "radish",
  "images/radish.webp",
  "Radish microgreens are a potent source of nutrients like vitamins, essential amino acids, proteins, fiber, minerals, antioxidants and much more. Overall, this spicy sprout has benefits across the board and is worth every bite."
);

function createSlide(slideObj) {
  const slide = document.createElement("section");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const heading = document.createElement("h2");
  const paragraph = document.createElement("p");
  slide.classList.add("display");
  info.classList.add("display-info");
  img.classList.add("image");
  heading.classList.add("display-info__heading");
  paragraph.classList.add("display-info__paragraph");
  imgContainer.classList.add("img-container", slideObj.title);
  img.src = slideObj.image;
  heading.innerText =
    slideObj.title.charAt(0).toUpperCase() + slideObj.title.slice(1);
  paragraph.innerText = slideObj.description;
  imgContainer.appendChild(img);
  slide.appendChild(imgContainer);
  slide.insertAdjacentElement("beforeend", info);
  info.insertAdjacentElement("afterbegin", heading);
  info.appendChild(paragraph);
  return slide;
}

const slideBroccoli = createSlide(broccoliSlideData);
const slideArugula = createSlide(arugulaSlideData);
const slideRadish = createSlide(radishSlideData);
const insertSlide = document.querySelector(".slide-container");
const slideShow = (slide) => {
  insertSlide.appendChild(slide);
  setTimeout(() => {
    slide.classList.add("open-slide");
    slide.classList.remove("close-slide");
  }, 100);
  setTimeout(() => {
    slide.classList.remove("open-slide");
    slide.classList.add("close-slide");
  }, 9000);
  setTimeout(() => slide.remove(), 10000);
};
const slideArray = [slideBroccoli, slideArugula, slideRadish];
const footer = document.querySelector(".main-footer");
slideShow(slideArray[0]);
var i = 1;
const interval = setInterval(() => {
  if (i >= slideArray.length || i === 3) {
    i = 0;
  }
  slideShow(slideArray[i]);
  i++;
}, 10000);
footer.onclick = () => {
  clearInterval(interval);
};
