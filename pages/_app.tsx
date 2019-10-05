import React from 'react'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore, ReduxStore } from '@store/index'
import { Provider } from 'react-redux'
import '@common/css/variables.scss'
import '@common/css/colors.scss'

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
export default withRedux(initStore)(
  class CustomApp extends App<{ store: ReduxStore }> {
    public render() {
      const { Component, pageProps, store } = this.props
      return (
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      )
    }
  }
)
