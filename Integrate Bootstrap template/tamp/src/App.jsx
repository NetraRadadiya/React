import './App.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {

  return (
    <>
      <div className='deo'>
        <div style={{marginRight:"5%"}}>
          <h1>Hi, Hi, I'M John Dro.</h1>
          <p>A freelance Web developerfrom London. I convent custom web design to bootstrap template.</p>
          <p>I make YouTube video and write vlog.</p> <br /> <br /> <br />
          <button className='btn'>I'M AVAILABLE</button> <br />
          <h2><FaFacebookF />  <FaInstagram />  <FaTwitter />  <FaGithub /></h2> 
        </div>

        <div>
          <img src="https://www.francelawfirm.com/wp-content/uploads/2015/09/Fotolia_69907519_Subscription_Monthly_XXL-copy.jpg"
           alt="" height={500} width={500} />
        </div>
      </div>
    </>
  )
}

export default App
