// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextResponse } from 'next/server';
import axios from 'axios';
import cheerio from "cheerio";

type Data = {
    name: string,
    value: string
}[]

async function Handler(Request: Request) {
    // Get All Groups from "www.nticrabat.com"'s select menu.
    let TargetURL = "https://nticrabat.com/";
    // Send Get Request to the Website - Retrieve data as HTML
    const { data }: any = await axios.get(TargetURL + "index.php");
    const $ = cheerio.load(data);
    const fetchedSelectBox: any = $('[name=groupe]').html();
    const Groups: Data = [];
    // Loop through each option
    $(fetchedSelectBox).each((i, el) => {
        const option = $(el);

        const optionName: string = option.text();
        const optionValue: string = String(option.attr('value'));

        Groups.push({
            name: optionName,
            value: optionValue
        });
    });

    // Remove undefined value records from group
    Groups.forEach(element => {
        if (element.value === "undefined" || element.value == "") {
            Groups.splice(Groups.indexOf(element), 1);
        }
    });
    Groups.shift();

    // Create HTML Elements
    NextResponse.json(Groups);
}

export { Handler as GET, Handler as POST };