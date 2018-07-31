import React, { PureComponent } from "react";
import "./Section.css"
import logo from "./image/Logo-white.svg"

export default class Section extends PureComponent {
  render() {
    return (
      <section className="section">
        <div className="section-div">
          <p className="section-p">Сделано с любовью и старанием на курсе «React.js»
          в <a className="section-a" href="https://loftschool.com/">Loftschool</a>. Автор работы: <b>Сергеев Андрей</b>.
          </p>
          <img className="section-image" src={logo} alt="Logo" />
        </div>
      </section>
    );
  }
}