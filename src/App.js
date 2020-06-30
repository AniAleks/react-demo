import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ToDo from './Components/container/ToDo/ToDo';
import NavMenu from './Components/NavMenu/NavMenu';
import About from './Components/container/About/About';
import Contact from './Components/container/Contact/Contact';
import { Route, Switch, Redirect } from 'react-router-dom';
import SingleTask from './Components/container/SingleTask/SingleTask';
import NotFound from './Components/container/NotFound/NotFound';
import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import Loader from './Components/loader/loader';

class App extends React.Component {

  componentDidUpdate(prevProps) {
    if (!prevProps.success && this.props.success) {
      this.props.enqueueSnackbar(this.props.success, {
        variant: 'success',
      });
      return;
    }

    if (!prevProps.error && this.props.error) {
      this.props.enqueueSnackbar(this.props.error, {
        variant: 'error',
      });
      return;
    }
  }


  render() {
  
    return (
      <div className='App'>
        <NavMenu />

        {this.props.loading && <Loader />}
        <Switch>
          <Route path='/' exact component={ToDo} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/task/:id' exact component={SingleTask} />
          <Route path='/404' exact component={NotFound} />
          <Redirect to='/404' />
        </Switch>


      </div>
    );
  }


}

export default connect((state) => {
  return {
    error: state.taskReducer.error,
    success: state.taskReducer.success,
    loading: state.taskReducer.loading,
  }

})(withSnackbar(App));
