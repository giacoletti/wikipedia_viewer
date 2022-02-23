import axios from 'axios';

const WikipediaAPI = {
  endpointUrl: 'https://en.wikipedia.org/w/api.php',

  wikiPagesSearch(query) {
    return async (dispatch) => {
      try {
        const response = await axios.get(this.endpointUrl, {
          params: {
            origin: '*',
            format: 'json',
            action: 'query',
            generator: 'search',
            gsrnamespace: '0',
            gsrlimit: '10',
            prop: 'pageimages|extracts',
            pilimit: 'max',
            exintro: '',
            explaintext: '',
            exsentences: '1',
            exlimit: 'max',
            gsrsearch: query
          }
        });
        const resultsArray = [];
        // loop over object of objects
        for (const property in response.data.query.pages) {
          resultsArray.push(response.data.query.pages[property]);
        }
        dispatch({ type: 'SET_SEARCH_RESULTS', payload: resultsArray });
      } catch (error) {
        //dispatch error
      }
    };
  }
};

export default WikipediaAPI;
