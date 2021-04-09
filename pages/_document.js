import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.png" />

                    <title>Warren Haskins | I build internet stuff with code stuff.</title>

                    <meta name="title" content="Warren Haskins | I build internet stuff with code stuff." />
                    <meta
                        name="description"
                        content="My name is Warren and Ive been building sites/apps/fun stuff for over 10 years with Node, Javascript, React, Vue, Rails, PHP, Python, CSS and loads more."
                    />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://metatags.io/" />
                    <meta property="og:title" content="Warren Haskins | I build internet stuff with code stuff." />
                    <meta
                        property="og:description"
                        content="My name is Warren and Ive been building sites/apps/fun stuff for over 10 years with Node, Javascript, React, Vue, Rails, PHP, Python, CSS and loads more."
                    />
                    <meta property="og:image" content="/share.png" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://metatags.io/" />
                    <meta property="twitter:title" content="Warren Haskins | I build internet stuff with code stuff." />
                    <meta
                        property="twitter:description"
                        content="My name is Warren and Ive been building sites/apps/fun stuff for over 10 years with Node, Javascript, React, Vue, Rails, PHP, Python, CSS and loads more."
                    />
                    <meta property="twitter:image" content="/share.png"></meta>

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
                        rel="stylesheet"
                    ></link>
                </Head>
                <body className="bg-gray-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
