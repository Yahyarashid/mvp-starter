import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type:'POST',
      url:'/sass.html',
      data:{message:term},
      success: function(){
        //console.log('results',results)
        console.log('success')
      }
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/sass.html', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

  render () {
    return (<div className='container'>
      <h1>Welcome to our blogger</h1>
       <Search onSearch={this.search.bind(this)}/>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));