// Trending Now Carousel
const trendingContainer = document.querySelector("#trendingImages");
const trendingSlides = trendingContainer.querySelectorAll(".slide");
let trendingIndex = 0;

const nextTrending = () => {
   const visibleSlides = 4; // Number of visible slides
   const slideWidth = trendingSlides[0].offsetWidth;
   trendingIndex++;
   if (trendingIndex > trendingSlides.length - visibleSlides) {
      trendingIndex = 0;
   }
   trendingContainer.style.transform = `translateX(-${trendingIndex * slideWidth}px)`;
};

const prevTrending = () => {
   const visibleSlides = 4;
   const slideWidth = trendingSlides[0].offsetWidth;
   trendingIndex--;
   if (trendingIndex < 0) {
      trendingIndex = trendingSlides.length - visibleSlides;
   }
   trendingContainer.style.transform = `translateX(-${trendingIndex * slideWidth}px)`;
};

document.querySelector("#nextTrending").addEventListener("click", nextTrending);
document.querySelector("#prevTrending").addEventListener("click", prevTrending);

// Only on Netflix Carousel
const netflixContainer = document.querySelector("#netflixOnlyImages");
const netflixSlides = netflixContainer.querySelectorAll(".slide");
let netflixIndex = 0;

const nextNetflix = () => {
   const visibleSlides = 4; // Number of visible slides
   const slideWidth = netflixSlides[0].offsetWidth;
   netflixIndex++;
   if (netflixIndex > netflixSlides.length - visibleSlides) {
      netflixIndex = 0;
   }
   netflixContainer.style.transform = `translateX(-${netflixIndex * slideWidth}px)`;
};

const prevNetflix = () => {
   const visibleSlides = 4;
   const slideWidth = netflixSlides[0].offsetWidth;
   netflixIndex--;
   if (netflixIndex < 0) {
      netflixIndex = netflixSlides.length - visibleSlides;
   }
   netflixContainer.style.transform = `translateX(-${netflixIndex * slideWidth}px)`;
};

document.querySelector("#nextNetflix").addEventListener("click", nextNetflix);
document.querySelector("#prevNetflix").addEventListener("click", prevNetflix);
