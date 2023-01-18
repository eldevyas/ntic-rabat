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
    // Get the value from redux
    // const groupValue = useSelector((state) => state.value)
    // console.log(groupValue);
    // Get All Groups from "www.nticrabat.com"'s select menu.
    let TargetURL = "https://nticrabat.com/";

    // get group id from get request
    const GroupID = req.query.GroupID;

    // Send Get Request to the Website - Retrieve data as HTML
    const { data } = await axios.get(TargetURL + "/emploi/index.php?groupe=" + GroupID);
    const $ = cheerio.load(data);



    const fetchedTable: any = [];
    for (let index = 3; index <= 8; index++) {
        // const featchedDay = ($(`table[bordercolor="#336699"]>tbody>tr:nth-child(${index})>td:nth-child(1)`).text())
        // fetchedTable.push({ day: featchedDay });
        // for (let td = 2; td <= 5; td++) {
        //   const featchedTiming = ($(`table[bordercolor="#336699"]>tbody>tr:nth-child(${index})>td:nth-child(${td})`).text())
        //   fetchedTable.push({ time: featchedTiming })
        // }

        let DayObject: { Day: string, Time: any } = { Day: "", Time: [] };


        const fetchedDay = ($(`table[bordercolor="#336699"]>tbody>tr:nth-child(${index})>td:nth-child(1)`).text());
        // remove spaces
        DayObject.Day = fetchedDay.replace(/\s/g, "");

        for (let td = 2; td <= 5; td++) {
            let fetchedTiming = ($(`table[bordercolor="#336699"]>tbody>tr:nth-child(${index})>td:nth-child(${td})`).text());

            // Remove extra spaces from fetchedTiming, but splits words
            fetchedTiming = fetchedTiming.replace(/\s\s+/g, ' ');

            // Check if start with space
            if (fetchedTiming[0] === ' ') {
                fetchedTiming = fetchedTiming.substring(1);
            }

            // if last character is space, remove it
            if (fetchedTiming[fetchedTiming.length - 1] === ' ') {
                fetchedTiming = fetchedTiming.substring(0, fetchedTiming.length - 1);
            }



            let Hall = "";
            let Former = "";

            // if string contains "est absente."
            if (fetchedTiming.includes("est absente.")) {
                Former = fetchedTiming.substring(0, fetchedTiming.indexOf("est absente."));
                // Remove last space
                Former = Former.substring(0, Former.length - 1);
                Hall = "Absente"
            } else {
                Hall = fetchedTiming.slice(fetchedTiming.lastIndexOf(' ')).slice(1);
                Former = fetchedTiming.slice(0, fetchedTiming.lastIndexOf(' '));
            }

            DayObject.Time.push({
                Hall: Hall,
                Former: Former
            });
        }

        fetchedTable.push(DayObject);
    }

    res.status(200).json(fetchedTable);
}
