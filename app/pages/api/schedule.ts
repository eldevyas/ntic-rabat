// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import cheerio from "cheerio";


type Data = {
  name: string,
  value: string
}[]

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Get All Groups from "www.nticrabat.com"'s select menu.
    let TargetURL = "https://nticrabat.com/";

    // Send Get Request to the Website - Retrieve data as HTML
    const { data } = await axios.get(TargetURL + "emploi/index.php?groupe=244");
    const $ = cheerio.load(data);


    const fetchedTable: any = $('table>table').html();

    // Create HTML Elements
    res.status(200).json(fetchedTable);
}
