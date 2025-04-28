export const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return response.ok ? products : [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
