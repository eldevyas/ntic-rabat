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



  const fetchedTable: any = [];
  for (let index = 3; index <= 8; index++) {
    const featchedDay = ($(`table[bordercolor="#336699"]>tbody>tr:nth-child(${index})>td:nth-child(1)`).text())
    fetchedTable.push({ day: featchedDay });
    for (let td = 2; td <= 5; td++) {
      const featchedTiming = ($(`table[bordercolor="#336699"]>tbody>tr:nth-child(${index})>td:nth-child(${td})`).text())
      fetchedTable.push({ time: featchedTiming })
    }
  }

  // const fetchedTable = $(`table[bordercolor="#336699"]>tbody>tr:nth-child(3)>td:nth-child(5)`).text()



  // Create HTML Elements
  res.status(200).json(fetchedTable);
}
