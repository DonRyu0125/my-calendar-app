import axios from "axios";
import X2JS from "x2js";

const base_url = "http://norfolk_test.minisisinc.com";

export const fetch_get = async (monthReport: string) => {
  try {
    const response = await axios.get(`${base_url}/scripts/mwimain.dll/144/M2L_TAG/${monthReport}?commandsearch&exp=tag_type calendar`, {
      headers: {
        "Content-Type": "text/xml",
      },
    });

    const x2js = new X2JS();
    const jsonData: any = x2js.xml2js(response?.data);
    return jsonData.div.xml.event;
  } catch (error) {
    throw error; 
  }
};



