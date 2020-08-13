import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <ul>
      <li>
        <Link to={ROUTES.ADMIN} style={{color: 'white'}}>Admin</Link>
      </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
   <li>
    <Link to={ROUTES.SIGN_IN} style={{color: 'white'}}>Sign In</Link>
  </li>

  </ul>
);

export default Navigation;