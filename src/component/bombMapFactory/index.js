
export default ( size ) => {
  let data = [];
  for (let y = 0; y < size; y++){
    data.push([]);
    for (let x = 0; x < size; x++){
      data[y][x] = {x, y};
    }
  }

  return data;
};
