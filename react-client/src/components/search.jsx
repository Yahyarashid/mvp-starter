
import React from 'react';
import { Link } from 'react-router-dom'; 

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      Write your blog here:<textarea rows="5" cols="100" input type="text" id="hhh" className="card-panel teal lighten-2" height="500" value={this.state.terms} onChange={this.onChange}>
     </textarea>      
      <button className="waves-effect waves-light btn" onClick={this.search} > Publish </button>
     <Link to="/list"><button>posts</button></Link>  
      
    </div>) 
  }
}

export default Search;