const getItemsURL: string = 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=60&fields=id,title,image_id';
const getImageURL = (id: number): string => `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

export { getItemsURL, getImageURL };
