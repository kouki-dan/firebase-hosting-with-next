import React from "react";
import firebase from "firebase/app";
import App from "next/app";


class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      firebaseInitialized: false,
    };
  }

  componentDidMount() {
    fetch("/__/firebase/init.json").then(async response => {
      firebase.initializeApp(await response.json());
      this.setState({
        firebaseInitialized: true
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    if (!this.state.firebaseInitialized) {
      return <></>;
    }
    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
