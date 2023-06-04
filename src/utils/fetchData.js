export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 
      '3d1e64e48bmsh1beb97cf0d2c8b7p14acfdjsn5dfe9f4acd23',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) =>{
    const res = await fetch(url,options);
    const data = await res.json()

    return data;
}