import UserGreeting from './UserGreeting.js'
import Header from './Header.js'
import Footer from './Footer.js'
import Food from './Food.js'

function App() {
  return(
    <>
    <UserGreeting isLoggedIn={true} username=""/>
      <Header/>
      <Food/>
      <Footer/>
    </>
  )
}

export default App;
