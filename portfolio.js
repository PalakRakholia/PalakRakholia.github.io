const artworkDialog = document.querySelector(".artwork-dialog");
const previewImage = artworkDialog.querySelector("img");

document.querySelectorAll(".artwork-open").forEach((button) => {
  button.onclick = () => {
    const image = button.querySelector("img");

    previewImage.src = image.dataset.previewSrc || image.src;
    previewImage.alt = image.alt;

    artworkDialog.showModal();
  };
});

const pageBackground = document.querySelector(".page-background");
const surpriseMeButton = document.querySelector(".surprise-me-button");
const artworkBackgrounds = [
  "assets/artworks/artwork1.png",
  "assets/artworks/artwork2.jpg",
  "assets/artworks/artwork3.jpg",
  "assets/artworks/artwork5.jpg",
  "assets/artworks/artwork5.png",
  "assets/artworks/artwork7.png",
  "assets/artworks/artwork8.png",
];
let currentBackgroundIndex = -1;

surpriseMeButton.onclick = () => {
  const availableIndexes = artworkBackgrounds
    .map((_, index) => index)
    .filter((index) => index !== currentBackgroundIndex);
  currentBackgroundIndex =
    availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
  const artworkUrl = new URL(
    artworkBackgrounds[currentBackgroundIndex],
    document.baseURI,
  );
  pageBackground.style.setProperty(
    "--artwork-image",
    `url("${artworkUrl.href}")`,
  );
  pageBackground.classList.add("has-artwork-background");
  surpriseMeButton.setAttribute("aria-label", "Show another random artwork background");
  surpriseMeButton.title = "Click again to see another background";
  surpriseMeButton.querySelector("span").textContent = "Try another";
};
