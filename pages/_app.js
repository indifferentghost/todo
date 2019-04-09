import React from 'react';
import App, { Container } from 'next/app';
import { StateProvider } from '../state';

class TodoList extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <StateProvider>
          <Component {...pageProps} />
        </StateProvider>
      </Container>
    )
  }
}

export default TodoList;
