import './App.css';
import './gallery.css';

import { AmplifyProvider } from '@aws-amplify/ui-react'
import { Link } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css'

// UI Components
import { RentalCollection } from './ui-components'
import { GalleryLogo } from './ui-components'
import { GalleryNavMobile } from './ui-components'

//  use to determine window size
import {useEffect, useState} from 'react';

function AppLandingPage() {
  //  window size related functionality
  //  from https://bobbyhadz.com/blog/react-get-window-width-height
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
//  end of determine window size functionality

  if (windowSize.innerWidth < 550) {
    const rentalCollOverrides = {
      "RentalCollection": {
        type: "list"
      }
    }

    return (
      <div>
        <div>
          <AmplifyProvider>
            <GalleryNavMobile />
            <RentalCollection overrides={rentalCollOverrides} />
          </AmplifyProvider>
        </div>
      </div>
    );
  }

  //  non-mobile device
  const rentalCollOverrides = {
    "RentalCollection": {
      type: "grid",
      columns: "2"
    }
  }

  return (
    <div>
      <AmplifyProvider>
        <Link><GalleryLogo /></Link>
        <RentalCollection overrides={rentalCollOverrides} />
      </AmplifyProvider>
    </div>
  );
}

function App() {
  return (
    <div>
      { AppLandingPage() }
    </div>
  );
}

export default App;
