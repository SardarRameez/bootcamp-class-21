import React from 'react';
import {client} from './../Config/gql_config'
import { ApolloProvider } from '@apollo/client';
import './App.css';
import { Student } from './Student';

function App() {
  return (
    <ApolloProvider client={client}>
      <Student></Student>
  </ApolloProvider>
  );
}

export default App;
