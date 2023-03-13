
export const mainDataJson = async () => {
  const response = await fetch("./pizzaBread.json");
  const data = await response.json();
  return data;
};
