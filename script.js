const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300); // Ekran genişliğine göre oran hesaplama
  let clickCounter = 0; // Tıklama sayacı
  const imageItem = movieList[i].querySelectorAll("img").length; // Her bir film listesindeki resim sayısı

  arrow.addEventListener("click", function () {
    clickCounter++;

    // Maksimum tıklama sayısını hesapla
    const maxClicks = imageItem - (4 + clickCounter) + (4 - widthRatio);

    // Mevcut transform değerini al
    const currentTransform = window.getComputedStyle(movieList[i]).transform;

    // Transform matrisinden currentTranslateX değerini çıkar
    let currentTranslateX = 0;
    if (currentTransform !== "none") {
      const matrixValues = currentTransform.split(",");
      currentTranslateX = parseFloat(matrixValues[4]);
    }

    // Eğer sınırlar içinde ise film listesini 300px sola kaydır, değilse sıfırla
    if (maxClicks >= 0) {
      movieList[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
