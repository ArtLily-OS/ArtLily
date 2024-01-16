async function fetchArt() {
  const response = await fetch('https://api.artic.edu/api/v1/artworks/129884');
  const art = await response.json();
  console.log(art);
  console.log(art.image_id);
}
fetchArt();
