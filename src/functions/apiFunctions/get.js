/**API FUNCTIONS */
/****************GET*****************/

export const endpoint = "https://releasin-test-app-api.herokuapp.com/api/";
export const getProduct = async (axios, setData) => {
  try {
    const response = await axios.get(endpoint);
    if (!response || response.error) return console.log("error 404");
    setData((prevState) => ({
      ...prevState,
      json: response.data.result,
    }));
  } catch (err) {
    console.log("error 500");
  }
};
