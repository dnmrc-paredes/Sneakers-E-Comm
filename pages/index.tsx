import React from 'react'
import type { NextPage } from 'next'
import { Root } from '../components/Pages'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Root.Container>
      <Head>
        <title> Sneakers | A new walk of life </title>
      </Head>
    </Root.Container>
  )
}

export default Home
