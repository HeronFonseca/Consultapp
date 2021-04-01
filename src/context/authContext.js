import React, {useState, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState();
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);

  const SingUp = (email, password) => {
    console.log('AQUIII 11', email, password);
    // Logando no firebase com uma nova conta
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => {
        console.log('User account created & signed in!', response);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const LoginAuth = (email, password) => {
    // Logando no firebase com uma conta existente
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User logged in!', response);
      })
      .catch(error => {
        console.log('Login failed', error);
      });
  };

  const LogOut = () => {
    auth().signOut();
  };

  // Handle user state changes
  function onAuthStateChanged(currentUser) {
    setCurrentUser(currentUser);
    setLoading(false);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const value = {currentUser, SingUp, LoginAuth, LogOut};

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
