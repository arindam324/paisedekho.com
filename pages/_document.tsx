import {createGetInitialProps} from "@mantine/next";
import {Html, Head, Main, NextScript} from "next/document";
import Script from "next/script";

const getInitialProps = createGetInitialProps();

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html:
                        `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KD23K8X')`
                }}
                />
                <title>PaisaDekho</title>
            </Head>
            <body>
            <noscript dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KD23K8X" height="0" width="0"></iframe>`
            }}></noscript>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

Document.getInitialProps = getInitialProps;
