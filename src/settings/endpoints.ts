let BASE_URL = '';

/* yarn build */
if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'https://data.gov.ru';
}

/* yarn start */
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'https://data.gov.ru';
}

export const URL = `${BASE_URL}`;

export const GET_DATA = '/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json';
