
export const GetAuditLogsByLookback = async () => {
    const url = "http://127.0.0.1:8000/";
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to retrieve URL' + url);
    }

    return response.json();
}