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
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "Godzilla"
  componentDidMount() {
    this.searchMovies("Godzilla");
  }

  searchMovies = query => {
    API.search(query)
      .then(res =>{ this.setState({ result: res.data.Search })

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
    // const items = this.props.result.map((d,i) => (<>{d[i].name}</>));
    return (
      
      <Container>
       
        <Row>
          <Col>
          {this.state.result.map((item, index) => (
               
           <Table key = {index}
                
                 
                  title={item.Title}
                  src={item.Poster}
                  type={item.Type}
                  year={item.Year}
                 
           
           />           
          ))}
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
