const getFakeDataList = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    const slicedData = data.slice(0, 4);

    console.log("res", slicedData);
  } catch (error) {
    console.error(error);
  }
};

getFakeDataList();