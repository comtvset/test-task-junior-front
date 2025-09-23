const fetchData = async () => {
  try {
    const response = await fetch(
      'https://test-api-cdn.ams3.cdn.digitaloceanspaces.com/mobile.json'
    );

    const result = await response.text();

    let data;

    try {
      data = JSON.parse(result);
    } catch {
      const fixedResult = result.replace(/,(\s*[\]}])/g, '$1');
      try {
        data = JSON.parse(fixedResult);
      } catch (err) {
        console.error('Failed to parse:', err);
        data = {};
      }
      return data;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
