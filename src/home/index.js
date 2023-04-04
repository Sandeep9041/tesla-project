import { Component } from "react";
import "./index.css";
import {Link} from "react-router-dom"


class Home extends Component {
  render() {
    return (
        <>
    <div className="top-popup"   >
        <p className="top">Update — $7,500 tax credit is anticipated to be reduced for Model 3 on April 18. Take delivery now.<span>
    <a href="https://www.tesla.com/support/incentives"> Learn More</a></span></p></div>





      <div className="website-home-container">
        <div className="home-header-container">
        <Link
        to="/"
        >
          <img
            src="https://www.freepnglogos.com/uploads/tesla-logo-png-20.png"
            alt="tesla logo png"
            className="tesla-logo"
          />
        </Link>
        <div className="header-nav">
            <ul>
                <li>
                    <a href="https://www.tesla.com/models" className="link">Model S</a>
                    
                </li>
                <li>
                    <a href="https://www.tesla.com/model3"  className="link">Model 3</a>
                   
                </li><li>
                
                    <a href="https://www.tesla.com/modelx"  className="link">Model X</a>
                   
                </li><li>
                   
                    <a href="https://www.tesla.com/modely"  className="link">Model Y</a>
                   
                </li><li>
                    
                    <a href="https://www.tesla.com/solarroof"  className="link">Solar Roof</a>
                </li>
                <li>

                    <a href="https://www.tesla.com/solarpanels"  className="link">Solar Panels</a>
                </li>
                <li>
                    <a href="https://www.tesla.com/powerwall"  className="link">Powerwall</a>
                </li>
            </ul>
        </div>
        <div className="header-nav">
            <a className="link" href='https://shop.tesla.com/'>
                Shop
            </a>
            <a className="link" href='https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https%3A%2F%2Fwww.tesla.com%2Fteslaaccount%2Fowner-xp%2Fauth%2Fcallback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email%20phone&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US/'>
                Account
            </a>
            <a className="link" href='https://www.tesla.com/'>
                Menu
            </a>
        </div>

        </div>
        
      </div>
      </>
    );
  }
}

export default Home;
