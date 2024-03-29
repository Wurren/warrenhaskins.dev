import Head from 'next/head';

export default function Home() {
    return (
        <>
            <div className="flex items-center min-h-dscreen md:min-h-screen p-5 lg:p-12 xl:p-32 2xl:p-44 text-white">
                <div className="max-w-4xl">
                    <h1 className="my-5 text-2xl font-bold md:text-4xl tracking-tight text-pretty">
                        Hi. I've been building sites/apps/fun stuff for over 12 years. From small super-fast brochure
                        sites for large brands, giant ecommerce sites and web apps serving tens of thousands of users.
                    </h1>

                    <p className="my-5 md:text-lg font-medium">
                        I build with <span className="font-bold-o text-green-400">Node</span>,{' '}
                        <span className="font-bold-o text-yellow-400">Javascript</span>,{' '}
                        <span className="font-bold-o text-blue-400">Typescript</span>,{' '}
                        <span className="font-bold-o text-cyan-400">React</span>,{' '}
                        <span className="font-bold-o text-orange-400">Ruby</span>,{' '}
                        <span className="font-bold-o text-red-400">Rails</span>,{' '}
                        <span className="font-bold-o text-purple-400">PHP</span>,{' '}
                        <span className="font-bold-o text-fuchsia-400">CSS</span> and loads more.
                    </p>

                    <p className="my-5 md:text-lg">
                        I work over at{' '}
                        <a
                            className="font-medium border-b border-white border-dotted border-opacity-25"
                            target="_blank"
                            rel="noopener"
                            href="https://hustleandpraise.com"
                        >
                            Hustle & Praise.
                        </a>{' '}
                        Come say hi. We do good work.
                    </p>

                    <p className="md:text-lg my-5">
                        I{' '}
                        <a
                            rel="noopener"
                            target="_blank"
                            className="inline-block border-b border-white border-opacity-25 border-dotted"
                            href="https://www.twitter.com/warrenhaskins"
                        >
                            tweet sometimes
                        </a>
                        .
                    </p>

                    <p className="my-8">
                        <a
                            href="mailto:warrenhaskins@gmail.com"
                            className="shadow-hard inline-flex space-x-4 p-3 px-6 transition-all duration-200 ease-in-out border border-white text-white rounded-full shadow hover:bg-gray-300font-medium"
                        >
                            <span>Need a hand? Give me a shout.</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.7 12.7" fill="#fff" className="w-4">
                                <path
                                    d="M-166.158 119.275v1.059h1.059v-1.059zm1.059 1.059v1.058h1.058v-1.058zm1.058 1.058v1.06h1.059v-1.06zm1.059 1.06v1.057h1.058v-1.058zm1.058 1.057v1.06h1.06v-1.06zm1.06 1.06v1.056h1.055v-1.057zm0 1.056h-1.06v1.058h1.06zm-1.06 1.058h-1.058v1.06h1.058zm-1.058 1.06h-1.059v1.058h1.059zm-1.059 1.058h-1.058v1.058h1.058zm-1.058 1.058h-1.06v1.059h1.06z"
                                    color="#ffffff"
                                    overflow="visible"
                                    transform="translate(169.333 -118.746)"
                                ></path>
                            </svg>
                        </a>
                    </p>

                    <ul className="flex space-x-5 text-gray-100">
                        <li>
                            <a
                                rel="noopener"
                                target="_blank"
                                href="https://www.github.com/wurren"
                                className="block w-6 h-6 transition-all duration-200 ease-in-out hover:text-yellow-500"
                            >
                                <span className="sr-only">Follow me on Github</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener"
                                target="_blank"
                                href="https://www.twitter.com/warrenhaskins"
                                className="block w-6 h-6 transition-all duration-200 ease-in-out hover:text-yellow-500"
                            >
                                <span className="sr-only">Follow me on Twitter</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noopener"
                                target="_blank"
                                href="https://www.instagram.com/warrenhaskins"
                                className="block w-6 h-6 transition-all duration-200 ease-in-out hover:text-yellow-500"
                            >
                                <span className="sr-only">Follow me on Instagram</span>
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
