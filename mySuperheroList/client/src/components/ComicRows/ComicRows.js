import React, { Component } from "react";

import "./ComicRows.css";
import Modal from "../Modal";
import Youtube from "../Youtube";

class ComicRows extends Component {
  state = {
    show: false
  };
  // Youtube link

  // Wikipedia link
  readMore = () => {
    const url = `https://en.wikipedia.org/wiki/${this.props.name}`;

    const win = window.open(url, "_blank");
    win.focus();
  };

  showModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <table key={this.props.id} className="table">
          <tbody>
            <tr>
              <td>
                <img
                  className="pictures"
                  src={this.props.image}
                  alt={this.props.name}
                />
              </td>
              <td className="content">
                <h1>Name: {this.props.name}</h1>
                <h2>Good/Bad: {this.props.heroOrVillian}</h2>
                <p>Group Affiliation: {this.props.group}</p>
                <h3>Publishers: {this.props.bio}</h3>
                {/* <input
                  type="button"
                  value="Watch Videos"
                  onClick={this.viewVideos.bind(this)}
                />*/}

                <input
                  className="button"
                  type="button"
                  value="Read More"
                  onClick={this.readMore.bind(this)}
                />
                <input
                  type="button"
                  onClick={this.showModal}
                  value="Watch Videos"
                />

                <Modal onClose={this.showModal} show={this.state.show}>
                  <Youtube name={this.props.name} publishers={this.props.bio} />
                </Modal>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ComicRows;
