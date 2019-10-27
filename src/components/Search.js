import React, { Component } from "react";
import items from "./items";

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchable: [],
      filteredSearchable: []
    };
  }

  // the component only renders items from filteredsearchable.
  componentDidMount() {
    this.setState({
      searchable: items.map(function(item) {
        return item;
      }),
      filteredSearchable: items.map(function(item) {
        return item;
      })
    });
  }

  handleSearch = event => {
    let results = this.state.searchable.filter(function(item) {
      //lowercase the search term
      const searchTerm = event.target.value.toLowerCase();
      //lowercase the title and description then add them together in one string
      const searchable =
        item.title.toLowerCase() + "\n" + item.description.toLowerCase();
      return searchable.includes(searchTerm);
    });
    // takes 'results' from 'searchable' and pushes to 'filteredFrameworks'
    // if nothing matches query, set state to 'no results' instead of rednering  nothing
    if (results.length === 0) {
      this.setState({
        filteredSearchable: [
          {
            title: "No results :("
          }
        ]
      });
    } else {
      this.setState({
        filteredSearchable: results.map(function(elem) {
          return elem;
        })
      });
    }
  };

  render() {
    return (
      <div id="searchpage">
        <section>
          <form>
            <input
              type="text"
              id="searchInput"
              placeholder="Search"
              onChange={this.handleSearch}
            />
          </form>
        </section>
        {this.state.filteredSearchable.map(elem => (
          <React.Fragment key={elem.title}>
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
            <hr />
          </React.Fragment>
        ))}
      </div>
    );
  }
}
