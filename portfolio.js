const artworkDialog = document.querySelector(".artwork-dialog");
const previewImage = artworkDialog.querySelector("img");

document.querySelectorAll(".artwork-open").forEach((button) => {
  button.onclick = () => {
    const image = button.querySelector("img");

    previewImage.src = image.src;
    previewImage.alt = image.alt;

    artworkDialog.showModal();
  };
});

const header = document.querySelector(".header");
const surpriseMeButton = document.querySelector(".surprise-me-button");
const artworkBackgrounds = [
  "assets/artworks/artwork1.jpg",
  "assets/artworks/artwork2.jpeg",
  "assets/artworks/artwork3.jpg",
  "assets/artworks/artwork4.jpg",
  "assets/artworks/artwork5.jpg",
  "assets/artworks/artwork6.jpg",
];

surpriseMeButton.onclick = () => {
  const random = Math.floor(Math.random() * artworkBackgrounds.length);
  header.style.backgroundImage = `url("${artworkBackgrounds[random]}")`;
  header.classList.add("has-artwork-background");
};
