import logo from './logo.svg';
import './App.css';

import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { RentalCollection } from './ui-components'

function App() {
  return (
    <AmplifyProvider>
      <RentalCollection type="list" />
    </AmplifyProvider>
  );
}

export default App;
