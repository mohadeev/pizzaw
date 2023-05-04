export const mainDataJson = async () => {
  const response = await fetch(
    "https://be-pizzaw.vercel.app/api/pizza-ingredients"
  );
  const data = await response.json();
  console.log(data.responseData);
  return data.responseData;
};
