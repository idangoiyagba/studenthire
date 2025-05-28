export const fetchJobs = async (query: string, location: string) => {
  const response = await fetch(
    `https://jsearch.p.rapidapi.com/search?query=${query}+student&location=${location}&num_pages=1`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();
  return data.data;
};