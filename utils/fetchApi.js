import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

/**/

/* --header 'x-rapidapi-host: bayut.p.rapidapi.com' \
	--header 'x-rapidapi-key: 161bedd5f9mshe5a838caae365ffp1d6347jsn289f55881829' */

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "161bedd5f9mshe5a838caae365ffp1d6347jsn289f55881829",
    },
  });

  return data;
};
