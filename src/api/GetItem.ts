export const getItems = () => {
  return new Promise((resolve, reject) => {
    fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then((data) => data.json())
      .then(resolve)
      .catch((err) => reject(err));
  });
};
