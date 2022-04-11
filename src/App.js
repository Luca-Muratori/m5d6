import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    blogs: [],
    authors: [],
  };
  render() {
    return (
      <div className="App">
        <div id="authors">
          <div>Authors in the catalogue</div>
          {this.state.authors.map((author, index) => {
            <div key={index}>
              <p>{author.name}</p>
            </div>;
          })}
        </div>
        <div id="blogs">
          <div>blogs in the catalogue</div>
          {this.state.blogs.map((blog, index) => {
            <div key={index}>
              <p>{blog.name}</p>
            </div>;
          })}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    const apiUrl = process.env.REACT_APP_URL;
    const respAuthors = await fetch(`${apiUrl}/authors`);
    const respBlogs = await fetch(`${apiUrl}/blogs`);

    const jsonAuthors = await respAuthors.json();
    this.setState({ authors: jsonAuthors });
    const jsonBlogs = await respBlogs.json();
    this.setState({ blogs: jsonBlogs });
  };
}

export default App;
