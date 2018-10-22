import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Col2 from "../Col2";
import Panel from "../Panel";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";
import "./omdb.css";



class Omdb extends Component {
  state = {
    result: {},
    search: ""
  };

  // When this component mounts, search for the movie "Ready Player One"
  componentDidMount() {
    this.searchMovies("Ready Player One");
  }

  searchMovies = query => {
    API.search(query)
      .then(res =>{ this.setState({ result: res.data })

      console.log(res);
    })
      .catch(err => console.log(err));
      
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchMovies(this.state.search);
  };

  render() {
    return (
      
      <Container>
       
        <Row>
          <Col>
          {this.state.result.Title
                ?
           <Table heading={this.state.result.Title || "Search for a Movie to Begin"}
                title={this.state.result.Title}
                  src={this.state.result.Poster}
                  director={this.state.result.Director}
                  genre={this.state.result.Genre}
                  released={this.state.result.Released}
                  plot={this.state.result.Plot}
                  rated={this.state.result.Rated}
                  runtime={this.state.result.Runtime}
                  year={this.state.result.Year}
                  imd={this.state.result.imdbRating}
                  website={this.state.result.Website}
           
           />           
             : <h3>No Results to Display</h3>}
          </Col>
          <Col2>
            <Panel heading="Search">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Panel>
          </Col2>
        </Row>
      </Container>
    );
  }
}

export default Omdb;
