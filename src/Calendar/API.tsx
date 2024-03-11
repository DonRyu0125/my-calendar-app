import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

const base_url = 'http://norfolk_test.minisisinc.com';
const parser = new XMLParser();

export const fetch_get = async (monthReport:string) => {
  try {
    const response:any = await axios.get(`${base_url}/scripts/mwimain.dll/144/M2L_TAG/${monthReport}?commandsearch&exp=tag_type calendar`);

    let jObj = parser.parse(response);
    console.log('jObj',jObj)

    return;
  } catch (error) {
    console.error('Error in GET request:', error);
    throw error;
  }

};