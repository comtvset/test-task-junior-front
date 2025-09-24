const fetchData = async () => {
  try {
    const response = await fetch(
      'https://test-api-cdn.ams3.cdn.digitaloceanspaces.com/mobile.json'
    );

    const result = await response.text();

    try {
      return JSON.parse(result);
    } catch {
      const fixedResult = result.replace(/,(\s*[\]}])/g, '$1');
      try {
        return JSON.parse(fixedResult);
      } catch (err) {
        console.error('Failed to parse:', err);
        return {};
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error);

    try {
      const response = await fetch('./assets/data/mobile.json');
      return await response.json();
    } catch (localError) {
      console.error('Failed to load local JSON:', localError);
      return {};
    }
  }
};

export default fetchData;
