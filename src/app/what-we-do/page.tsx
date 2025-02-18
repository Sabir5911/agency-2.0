import React from 'react'
import Services from './components/Card'
import Head from 'next/head'

export default function page() {
  return <>
 <Head>
        <title>What We Do | Code Mate Solutions</title>
        <meta name="google-site-verification" content="EAIJVU85mrJyz4LmITDiHHPkQWzaWO9PYzImFnP57N8" />
        <meta name="description" content="Learn what we do at Code Mate Solutions. We offer top-notch development services for businesses." />
      </Head>
  <div>
    
  <Services />

    </div>
  </>
}
