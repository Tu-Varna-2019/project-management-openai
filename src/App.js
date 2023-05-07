import './App.css';
import { Authenticator, Card } from '@aws-amplify/ui-react';
//import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import { Amplify } from 'aws-amplify'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import CreateNotePage from "./pages/CreateNotePage";
import HomePage from './pages/HomePage';
import React,{ useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DeleteAccountPage from './pages/DeleteAccountPage';
import BinPage from './pages/BinPage';
import ReminderPage from './pages/ReminderPage';
import NotFound404Page from './pages/NotFound404Page';
import { AppFunc } from './overrides/AppOverride';
import "./css/deviceSize.css";

const {
    AppComponentOverride,
    logoURL
} = AppFunc();

Amplify.configure(awsExports);
export default function App() {
  useEffect(() => {
    // This will run when the page first loads and whenever the title changes
    document.title = "MNotes";
  });
  
  return (
    <div className='amplify-container my-component' style={{
      display: 'flex',alignItems: 'center',
      justifyContent: 'center',height: 1100}}>
      <Helmet>
      <link rel="icon" href={logoURL} />
      </Helmet><Card variation="elevated">
        <Authenticator components={AppComponentOverride}>
    <BrowserRouter>
      <Routes>
        <Route path="/note" element={<HomePage/>}/>
        <Route path="/reminder" element={<ReminderPage/>}/>
        <Route path="/bin" element={<BinPage/>}/>
        <Route path='/create-note' element={<CreateNotePage/>}/>
        <Route path='/reset-password' element={<ResetPasswordPage/>}/>
        <Route path='/delete-account' element={<DeleteAccountPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path='*' element={<NotFound404Page/>}/>
      </Routes>
    </BrowserRouter></Authenticator></Card></div>);}
//export default withAuthenticator(App ,  true  /*{signIn},{signOut},{signUp},*/);
//export default  App;