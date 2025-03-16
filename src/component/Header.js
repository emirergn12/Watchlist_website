import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className ="container">
              <div className="inner-content">
                <div className="brand">İzlenecekler</div>
                     <Link to={"/"}>İzlenecekler</Link>
                <ul className="nav-links">
                     <li>
                        <Link to={"/watched "}>İzlenenler</Link>
                     </li>
                     <li>
                        <Link to="/add" className="btn">
                            <i className="fa fa-plus-circle"></i>
                            
                        </Link>
                    </li>
                </ul>
          </div>  
        </div>
      </header>
    );
};

export default Header;