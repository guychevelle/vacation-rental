import './App.css';
import './vacationrental.css';

import { AmplifyProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

// UI Components
import { RentalCollection } from './ui-components'
import { GalleryLogo } from './ui-components'
import { GalleryLogoMobile } from './ui-components'

//  hamburger menu
import Sidebar from './Sidebar';

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
      <div className="App" id="outer-container">
        <div className="burger-margins">
          <Sidebar pageWrapId={'page-wrap'}
                   outerContainerId={'outer-container'} />
        </div>
        <div>
          <AmplifyProvider>
            <div className="link-image">
              <GalleryLogoMobile />
            </div>
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
        <div className="link-image">
          <GalleryLogo />
        </div>
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
