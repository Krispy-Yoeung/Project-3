import React, { Component } from "react";

import $ from "jquery";

import ComicRows from "../ComicRows";

class ComicCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch();
  }
  performSearch = searchTerm => {
    const queryURL = "http://superheroapi.com/api/";
    const access = "2160363873976801/";
    $.ajax({
      url: `${queryURL}${access}search/${searchTerm}`,
      method: "GET"
    }).then(data => {
      let res = data.results;
      let comicRows = [];
      //   char is short for character
      res.forEach(char => {
        console.log(char);
        const comicRow = (
          <ComicRows
            key={char.id}
            name={char.name}
            image={char.image.url}
            bio={char.biography.publisher.toUpperCase()}
            heroOrVillian={char.biography.alignment.toUpperCase()}
            group={char.connections["group-affiliation"]}
          />
        );
        comicRows.push(comicRow);
      });
      this.setState({
        rows: comicRows
      });
    });
  };

  searchHandler = event => {
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  };
  render() {
    return (
      <div>
        {/*   <Container> */}
        {/* <Row> */}
        {/* <Col> */}

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchHandler.bind(this)}
          placeholder="Enter search term"
        />

        {this.state.rows}

        {/* </Col> */}
        {/* </Row> */}
        {/* </Container> */}
      </div>
    );
  }
}

export default ComicCharacters;
