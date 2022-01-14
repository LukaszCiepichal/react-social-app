import React, { useEffect } from 'react';
import SocialApp from './SocialApp';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faHeart } from '@fortawesome/free-solid-svg-icons';


library.add(faHeart)

function App() {

  useEffect(() => {
    localStorage.clear();
  });

  return (
    <SocialApp />
  )
}

export default App;