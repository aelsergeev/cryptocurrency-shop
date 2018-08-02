import React, { Fragment, PureComponent } from "react";
import "./Main.css"
import Wallet from "../Wallet";
import Header from "../Header";
import Section from "../Section";
import Transactions from "../Transactions";
import Graph from "../Graph";

export default class Main extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header selected={this.props.params.coins} />
        <main className="main">
          <div className="main-div">
            <article className="main-article">
              <Wallet />
              <section>
                <Graph />
                <Transactions />
              </section>
            </article>
          </div>
        </main>
        <Section />
      </Fragment>
    );
  }
}
