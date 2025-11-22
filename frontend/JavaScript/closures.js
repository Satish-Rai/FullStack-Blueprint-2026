const getFakeDataList = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data.slice(0, 4);
  } catch (error) {
    console.error(error);
    return [];
  }
};

console.log("res", getFakeDataList());