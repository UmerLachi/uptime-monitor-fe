const getSeoFriendlyUrl = (url) => {
  if (url.substr(url.length - 1) === '/') {
    return url.slice(0, -1).replace(/(^\w+:|^)\/\//, '');
  }

  return url.replace(/(^\w+:|^)\/\//, '');
};

export default getSeoFriendlyUrl;
