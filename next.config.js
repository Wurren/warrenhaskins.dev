module.exports = {
    async redirects() {
        return [
            {
                source: '/maddogbrewco',
                destination: 'https://maddogbrew.co',
                permanent: true,
            },
        ];
    },
};
