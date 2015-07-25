var LocationsFetcher = {
  fetch: function () {
    return new Promise(function (resolve, reject) {

      setTimeout(function () {

        resolve(mockData);
      }, 250);
    });
  }
};
