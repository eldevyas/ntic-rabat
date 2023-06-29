import Container from "@/app/(Shared Layout)/emplois/components/Container";
//
export const metadata = {
    title: "NTIC Rabat - Emplois",
    description:
        "Consultez les emplois de tous les groupes de l'institut sur notre page dédiée. Restez informé des horaires de cours, des examens et des activités en un seul endroit.",
};
async function GetPlanning(GroupID: string) {
    "use server";
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    if (!GroupID || GroupID == "") return [];
    try {
        const Response = await fetch(`/api/groups/v2/${GroupID}`, {
            next: { revalidate: 10 },
        });
        if (Response.ok) {
            const Planning = await Response.json();
            return Planning;
        }
    } catch (error) {
        console.log("Error occurred while fetching planning:", error);
    }
    return [];
}

async function GetWeather() {
    "use server";
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    try {
        const Response = await fetch(`/api/weather`, {
            // Revalidate every 1 hour
            next: { revalidate: 60 * 60 },
        });
        if (Response.ok) {
            const Weather = await Response.json();
            return Weather;
        }
    } catch (error) {
        console.log("Error occurred while fetching weather:", error);
    }
    return [];
}

async function GetGroups() {
    "use server";
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    try {
        const Response = await fetch(`/api/groups/v2`, {
            // Revalidate every 2 months
            next: { revalidate: 60 * 60 * 24 * 30 * 2 },
        });
        if (Response.ok) {
            const Groups = await Response.json();
            return Groups;
        }
    } catch (error) {
        console.log("Error occurred while fetching groups:", error);
    }
    return [];
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
