 import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Welcome } from "./components/welcome"
 import './index.css'
 
 export const App = () => {
    return(
      <>
       <Header />
       <Home/>
       <Welcome/>
      </>
    )
}