export default async function(url) {
    const response = await fetch(url);
    const products = await response.json();
    return products;
}
