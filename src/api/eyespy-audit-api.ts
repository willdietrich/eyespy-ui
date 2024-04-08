
export const GetAuditLogsByLookback = async (timeframe: number) => {
    const url = "http://localhost:8000/audit/search";
    const requestBody = {
        type: 0,
        timeframe_days: timeframe
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error('Failed to retrieve URL' + url);
    }

    return response.json();
}