import React, { PureComponent } from "react";
import "./Main.css"
import Wallet from "../Wallet";

export default class Main extends PureComponent {
  render() {
    return (
      <main className="main">
        <div className="main-div">
          <article className="main-article">
            <Wallet />
          </article>
        </div>
      </main>
    );
  }
}