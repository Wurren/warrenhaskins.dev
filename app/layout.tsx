import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './app.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://warrenhaskins.dev'),
    title: 'Warren Haskins | I build internet stuff with code stuff.',
    description:
        'My name is Warren and Ive been building sites/apps/fun stuff for over 10 years with Node, Javascript, React, Vue, Rails, PHP, Python, CSS and loads more.',
    openGraph: {
        title: 'Warren Haskins | I build internet stuff with code stuff.',
        siteName: 'Warren Haskins | I build internet stuff with code stuff.',
        description:
            'My name is Warren and Ive been building sites/apps/fun stuff for over 10 years with Node, Javascript, React, Vue, Rails, PHP, Python, CSS and loads more.',
        type: 'website',
        locale: 'en_IE',
        url: 'https://warrenhaskins.dev',
        images: [
            {
                url: '/share.png',
                width: 800,
                height: 600,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Warren Haskins | I build internet stuff with code stuff.',
        description:
            'My name is Warren and Ive been building sites/apps/fun stuff for over 10 years with Node, Javascript, React, Vue, Rails, PHP, Python, CSS and loads more.',
        creator: '@warrenhaskins',
        images: ['share.png'],
        site: 'https://warrenhaskins.dev',
    },
    icons: {
        icon: '/favicon.png',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className={`bg-slate-900`}>{children}</body>
        </html>
    );
}
