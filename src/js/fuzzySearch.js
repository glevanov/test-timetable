import Fuse from 'fuse.js';

export default (arr, query) => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      'destination.name',
      'destination.code',
      'flight',
    ],
  };
  const fuse = new Fuse(arr, options);
  return fuse.search(query);
};
