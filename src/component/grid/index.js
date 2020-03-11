export default ( size ) => {
  let data = [];
  for (let i = 0; i < size; i++) {
    data.push([]);
    for (let j = 0; j < size; j++) {
      data[i][j] = {
        x: i,
        y: j,
      };
    }
  }
  return data;
};
