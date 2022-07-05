import logo from './logo.svg';
import './App.css';

import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { RentalCollection } from './ui-components'
import { TallCard } from './ui-components'

import { CommentCard } from './ui-components'

function App() {
  return (
    <AmplifyProvider>
      <CommentCard />
    </AmplifyProvider>
  );
}

//      <TallCard />
//      <RentalCollection type="list" />
export default App;
