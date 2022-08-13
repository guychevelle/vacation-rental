import './App.css';
import './vacationrental.css';

import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// UI Components
import { RentalCollection } from './ui-components';
import { GalleryLogo } from './ui-components';
import { GalleryLogoMobile } from './ui-components';

import { MyCardRentalCollection } from './ui-components';
import { ActionCardCollection } from './ui-components';

//  hamburger menu
import Sidebar from './Sidebar';

//  navbar (includes burger like menu for mobile)
import Navbarmenu from './Navbarmenu';

//  router
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

//  use to determine window size
import {useEffect, useState} from 'react';

function BurgerLandingPage() {
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


function AppLandingPage() {
  //  window size related functionality
  //  from https://bobbyhadz.com/blog/react-get-window-width-height
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    //  set page <head> meta data
    document.title = "Gallery: Vacation Rentals";
    document.querySelector('meta[name="description"]').setAttribute("content", "Collection of image cards with descriptions");
    document.querySelector('meta[name="keywords"]').setAttribute("content", "react aws amplify");

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

/*
  const rentalCollOverrides = {
    "RentalCollection": {
      type: "grid",
      columns: "2",
      gap: "0px"
    }
  }
*/

  const mycardrentalCollOverrides = windowSize.innerWidth < 700
    ?  {
        "MyCardRentalCollection": {
           type: "list",
           justifyContent: "center"
         }
       }
    :  {
        "MyCardRentalCollection": {
          type: "grid",
          templateColumns: "1fr 1fr"
         }
       }

  const actioncardOverrides = {
    "ActionCardCollection": {
      type: "grid",
      templateColumns: "1fr 1fr 1fr"
    }
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbarmenu />
        </div>
        <header>
        </header>
        <div className="collectiondiv"  margin="25px">
          <Routes>
            <Route path="/" element={<MyCardRentalCollection overrides={mycardrentalCollOverrides} overrideItems={
              ({ item, index }) => ({
                backgroundColor: index %2 === 0 ? 'white' : 'lightgray'
                })} />} />
          </Routes>
        </div>
      </BrowserRouter>
      <footer>
        <div className="centered">
          width: {windowSize.innerWidth} height: {windowSize.innerHeight}
        </div>
      </footer>
    </div>
  );
}

/*
          <Routes>
            <Route path="/" element={<ActionCardCollection overrides={actioncardOverrides} overrideItems={
              ({ item, index }) => ({
                backgroundColor: index %2 === 0 ? 'white' : 'lightgray'
                })} />} />
          </Routes>
        <Routes>
          <Route path="/" element={<RentalCollection overrides={rentalCollOverrides} />} />
        </Routes>
*/

function App() {
  return (
    <div>
      <AmplifyProvider>
      { AppLandingPage() }
      </AmplifyProvider>
    </div>
  );
}

export default App;
