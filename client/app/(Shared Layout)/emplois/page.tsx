import Container from "@/app/(Shared Layout)/emplois/components/Container";
//
export const metadata = {
    title: "NTIC Rabat - Emplois",
    description:
        "Consultez les emplois de tous les groupes de l'institut sur notre page dédiée. Restez informé des horaires de cours, des examens et des activités en un seul endroit.",
};

async function GetPlanning(GroupID: string) {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    if (!GroupID || GroupID == "") return [];
    const Response = await fetch(`${Hostname}/api/groups/v2/${GroupID}`, {
        next: { revalidate: 10 },
    });
    let Planning;
    if (Response.ok) {
        Planning = await Response.json();
        return Planning;
    }
    return Planning;
}

async function GetWeather() {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    const Response = await fetch(`${Hostname}/api/weather`, {
        // Revalidate every 1 hour
        next: { revalidate: 60 * 60 },
    });
    const Weather = await Response.json();
    return Weather;
}

async function GetGroups() {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    let Groups = [];
    try {
        const Response = await fetch(`${Hostname}/api/groups/v2`, {
            // Revalidate every 2 months
            next: { revalidate: 60 * 60 * 24 * 30 * 2 },
        });
        Groups = await Response.json();
    } catch (e) {
        console.log(e);
    }
    return Groups;
}

export default async function EmploisPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    // Query
    const QueryID = searchParams.GroupID;

    // Data
    const GroupID: string = (QueryID ? QueryID : "") as string;
    const Planning = await GetPlanning(GroupID);
    const Weather = await GetWeather();
    const Groups = await GetGroups();

    return (
        <Container
            GroupID={GroupID}
            Planning={Planning}
            Weather={Weather}
            Groups={Groups}
        />
    );
}
