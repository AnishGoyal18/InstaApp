import axios from 'axios';

export default async function handler(req, res) {
    try {
        const page = req.query.page || 1;
        const response = await axios.get('https://api.unsplash.com/photos/random', {
            params: {
                count: 10,
                page: page,
                client_id: process.env.UNSPLASH_API_KEY,
            },
        });

        const randomPhotos = response.data.map((photo) => ({
            id: photo.id,
            username: photo.user?.instagram_username,
            profileUrl: photo.user?.profile_image.small,
            location: photo.user.location,
            imageUrl: photo.urls.regular,
            likes: photo.likes,
            description: photo.description,
        }));

        res.status(200).json(randomPhotos);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Error' });
    }
}

