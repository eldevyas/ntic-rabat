// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from "cheerio";

type Data = {
    name: string,
    value: string
}[]

async function Handler() {
    // Get All Groups from "www.nticrabat.com"'s select menu.
    let TargetURL = "https://nticrabat.com/";
    // Send Get Request to the Website - Retrieve data as HTML
    const { data }: any = await axios.get(TargetURL + "emploi/index.php");
    const $ = cheerio.load(data);
    const fetchedSelectBox: any = $('[name=groupe]').html();
    const Groups: Data = [];
    // Loop through each option
    $(fetchedSelectBox).each((element: any) => {
        const option = $(element);

        const optionName: string = option.text();
        const optionValue: string = String(option.attr('value'));

        Groups.push({
            name: optionName,
            value: optionValue
        });
    });
    // Create HTML Elements
    NextResponse.json(Groups);
}

export { Handler as GET };