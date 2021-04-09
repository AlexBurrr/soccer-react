import NavBar from './Components/Nav/NavBar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import About from './Pages/About';
import GroupsAndTeams from './Pages/GroupsAndTeams';
import News from './Pages/News';
import Players from './Pages/Players';
import Home from './Pages/Home'

const MainContainer = styled.div`

@media(max-width: 375px){
  width:375px;
}
`





function App() {
  return (

    <Router>
      <MainContainer>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/groupsandteams' component={GroupsAndTeams} />
          <Route path='/news' component={News} />
          <Route path='/players' component={Players} />

        </Switch>


      </MainContainer>

    </Router>

  );
}

export default App;
