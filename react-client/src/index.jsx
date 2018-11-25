import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx'
import {BrowserRouter as Router, Route} from 'react-router-dom';

// import Route from 'react-router-dom/Route'


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
     let context = this;
    $.ajax({
      type:'POST',
      url:'/h',
      data:{message:term},
      success: function(){
        $.ajax({
          type: 'GET',
          url: '/h', 
          success: (data) => {
            context.setState({
              items: data
            })
          },
          error: (err) => {
            console.log('err', err);
          }
        });
        console.log('success')
      }
    });
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/h', 
      success: (data) => {
        this.setState({
          items: data
        })
        console.log(this.state.items)
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

render () {
   return(
    <Router>
    <div className='container'>
        <Route exact path="/"  render={ () => {return(
          <div >
             <h1>Welcome to our blogger</h1>
             <Search onSearch={this.search.bind(this)}/>
          </div> 
          )}}
        />
      <Route path="/"  render = { () => {
        return(
        <div>
          <List items={this.state.items}/>
        </div>
          )}} 
      />

    </div>

    </Router>
  )
}
}
ReactDOM.render(<App />, document.getElementById('app'));