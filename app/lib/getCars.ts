export async function getCars() {
    const response = await fetch("https://ddm999.github.io/gt7info/data.json",
        { cache: "no-store" }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch car list");
    }

    return response.json();
}