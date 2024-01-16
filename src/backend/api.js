async function fetchArt() {
  const response = await fetch('https://api.artic.edu/api/v1/artworks/129884');
  const art = await response.json();
  console.log(art.data);
  console.log(art.data.image_id);
  return art.data;
}
fetchArt();

// GET IMAGE
async function fetchImage() {
  const art = await fetchArt();
  const id = art.image_id;
  const base = 'https://www.artic.edu/iiif/2/';
  const suffix = '/full/843,/0/default.jpg';
  const fullURL = base + id + suffix;
  console.log(fullURL);
  return fullURL;
}
fetchImage();
const art = fetchArt();
console.log(art);
// const id = art.data.image_id;
// console.log(id);

export default fetchArt;
