import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Axios from 'axios';
import 'bulma/css/bulma.css';

import Home from './Components/Home';
import Error from './Components/Error';
import Signup from './Components/Signup';
import History from './Components/History';
import Specialty from './Components/Specialty';
import NurseList from './Components/NurseList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      patientId: null,
      nurseList: []
    }
  }
  componentDidMount() {
    Axios.post('/createNurses');
  }

  savePatientId = (id) => {
    this.setState({patientId: id});
  }

  chooseSpecialty = (name) => {
    this.setState({specialty: name});
    Axios.get('/nurseList', {params: {
      specialty: name
    }})
    .then(response => {
      this.setState({nurseList: response.data});
    })
    .catch(error => {console.log('Error loading list to client:', error)});
  }

  render() {
    return (
      <div className="App">
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Right Now // RN
              </h1>
              <h2 className="subtitle">
                Your personal healthcare ally, only when you need us.
              </h2>
            </div>
          </div>
        </section>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route 
            path='/signup' 
            render={() => <Signup savePatientId={this.savePatientId} />} 
            exact 
          />
          <Route 
            path='/signup/history' 
            render={() => <History patientId={this.state.patientId} />}
            exact
          />
          <Route 
            path='/specialty' 
            render={() => <Specialty chooseSpecialty={this.chooseSpecialty} />}
            exact
          />
          <Route 
            path='/nurselist' 
            render={() => <NurseList nurseList={this.state.nurseList} />}
            exact
          />
          <Route component={Error} />
        </Switch>
      </div>
    )
  }
}

export default App;
