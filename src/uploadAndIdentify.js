export async function uploadAndIdentify(images) {
    const formData = new FormData();

    images.forEach((file, index) => 
    {
        formData.append(`file${index}`, file);  
    });

    const response = await fetch('https://g80bdzwcc3.execute-api.ap-northeast-1.amazonaws.com/dev/BirdIdentification-dev', {
        method: 'POST',
        body: formData,
    });

    console.log('[uploadAndIdentify] API response status:', response.status);

    if (!response.ok) {
        throw new Error('Failed to upload images');
    }

    return response.json();     
}