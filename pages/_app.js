import '../styles/globals.css';
import Layout from '../components/layout/layout';
import {ApolloProvider} from "@apollo/client";
import client from './api/apollo-client';
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
      <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
  )
}

export default MyApp
