function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const succes = true;
    if (succes) {
      resolve('Success');
    } else {
      reject(new Error('rejected'));
    }
  });
}

export default getResponseFromAPI;
