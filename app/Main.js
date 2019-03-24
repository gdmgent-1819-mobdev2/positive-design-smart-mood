import React, {Component} from 'react'
import { AppContainer } from './utils/routes';
import { initializeFirebase } from './utils/firebaseService';


export class Main extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount(){
    initializeFirebase();
  }


  render() {
    return(
    <AppContainer />
    )
  }
}

export default Main;