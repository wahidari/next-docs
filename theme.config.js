export default {
  projectLink: 'https://github.com/wahidari/next-docs',
  github: 'https://github.com/wahidari/next-docs',
  docsRepositoryBase: 'https://github.com/wahidari/next-docs/blob/main',
  titleSuffix: ' – Next Docs',
  search: true,
  // unstable_flexsearch: true,
  // unstable_stork: true,
  // floatTOC: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Next Docs.</>,
  logo: (
    <>
      <svg aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" height="18"><path d="M22.601 2.062a1 1 0 0 0-.713-.713A11.252 11.252 0 0 0 10.47 4.972L9.354 6.296L6.75 5.668a2.777 2.777 0 0 0-3.387 1.357l-2.2 3.9a1 1 0 0 0 .661 1.469l3.073.659a13.42 13.42 0 0 0-.555 2.434a1 1 0 0 0 .284.836l3.1 3.1a1 1 0 0 0 .708.293c.028 0 .057-.001.086-.004a12.169 12.169 0 0 0 2.492-.49l.644 3.004a1 1 0 0 0 1.469.661l3.905-2.202a3.035 3.035 0 0 0 1.375-3.304l-.668-2.76l1.237-1.137A11.204 11.204 0 0 0 22.6 2.062zM3.572 10.723l1.556-2.76a.826.826 0 0 1 1.07-.375l1.718.416l-.65.772a13.095 13.095 0 0 0-1.59 2.398zm12.47 8.222l-2.715 1.532l-.43-2.005a11.34 11.34 0 0 0 2.414-1.62l.743-.683l.404 1.664a1.041 1.041 0 0 1-.416 1.112zm1.615-6.965l-3.685 3.386a9.773 9.773 0 0 1-5.17 2.304l-2.405-2.404a10.932 10.932 0 0 1 2.401-5.206l1.679-1.993a.964.964 0 0 0 .078-.092L11.99 6.27a9.278 9.278 0 0 1 8.81-3.12a9.218 9.218 0 0 1-3.143 8.829zm-.923-6.164a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5z" fill="currentColor"></path></svg>
      <span className="ml-2 text-xl font-semibold mb-0 md:inline">Next Docs</span>
      {/* <span className="text-gray-600 mt-2 font-normal hidden md:inline">
        Next.js Docs
      </span> */}
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Next Docs" />
      <meta name="og:description" content="Next Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://next-docss.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="next-docss.vercel.app" />
      <meta name="twitter:url" content="https://next-docss.vercel.app" />
      <meta name="og:title" content="Next Docs" />
      <meta name="og:image" content="https://next-docss.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Next Docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="icon" href="/favicon.ico" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  )
}
