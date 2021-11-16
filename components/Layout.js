import Head from 'next/head';
export default function Home({ children, title }) {
    return (
        <div className="bg-indigo-700">
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/pp.jfif" />
            </Head>

            <main className="container mx-auto max-w-xl pt-8 min-h-screen">
                {children}
            </main>
        </div>
    );
}
