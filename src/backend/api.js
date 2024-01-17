export async function fetchGallery() {
  // input:
  // search query
  // fields we want to display:
  // artist
  // time period
  // description
  // full URL to image

  // output:
  // an array of objects containing the above fields
  // fetch the full array of data with our search query and fields we want
  // if search query, use that, if not just pull from general artworks endpoint
  const response = await fetch(
    'https://api.artic.edu/api/v1/artworks?limit=10&fields=id,image_id,title,artist_display,description,date_display'
  );
  const art = await response.json();
  // console.log(art);
  const gallery = art.data.map((art) => {
    // for each piece, map the image_id by calling getImageURL on it
    art.image_id = getImageURL(art.image_id);
    // console.log(art.image_id)
    // console.log(art)
    // console.log(art)
    return art;
  });
  console.log(gallery);
  return gallery;
}
fetchGallery();

function getImageURL(image_id) {
  const id = image_id;
  const base = 'https://www.artic.edu/iiif/2/';
  const suffix = '/full/843,/0/default.jpg';
  const fullURL = base + id + suffix;
  // console.log(fullURL)
  return fullURL;
}

// export async function fetchArt(api_link) {
//   const response = await fetch(api_link);
//   const art = await response.json();
//   // console.log(art.data);
//   // console.log(art.data.image_id);
//   return art.data;
// }

// export async function fetchArtFields() {
//   const response = await fetch(
//     'https://api.artic.edu/api/v1/artworks/?fields=id,title,artist_display,date_display,main_reference_number'
//   );
//   const art = await response.json();
//   // console.log(art.data);
//   // console.log(art.data.image_id);
//   return art.data;
// }
// fetchArtFields();

// export async function fetchArtSearch() {
//   const response = await fetch(
//     'https://api.artic.edu/api/v1/artworks/search?q=cats'
//   );
//   const art = await response.json();
//   console.log(art);
//   const arrOfLinks = art.data.map((piece) => {
//     piece.api_link;
//   }); // returns an array of art
//   // console.log(arrOfLinks);
//   return arrOfLinks;
// }
// fetchArtSearch();
