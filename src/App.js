import './App.css';
import { Authenticator, Card } from '@aws-amplify/ui-react';
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
import BoardPage from './pages/BoardPage';
import SelectProjectPage from './pages/SelectProjectPage';
import CreateProjectPage from './pages/CreateProjectPage';
import ProfilePage from './pages/ProfilePage';
import ResetPasswordKAIPage from './pages/ResetPasswordKAIPage';
import DeleteAccountKAIPage from './pages/DeleteAccountKAIPage';
import EditTicketFullPage from './pages/EditTicketFullPage';


const {
    AppComponentOverride,
    logoURL
} = AppFunc();

Amplify.configure(awsExports);
export default function App() {
  useEffect(() => {
    document.title = "KAI";
    console.warn = (message) => {
      if (message.includes('FileUploader has exited Dev Preview and was renamed to StorageManager') 
          || message.includes("Cookie ")) {
        // Ignore the specific warning message
        return;
      }
      // For all other warnings, print them to the console
      console.warn(message);
    };
  },[]);
  
  return (
    <div className='amplify-container' style={{
      display: 'flex',alignItems: 'center',
      justifyContent: 'center' }}>
      <Helmet>
      <link rel="icon" href={logoURL} />
      </Helmet><Card variation="elevated">
        <Authenticator components={AppComponentOverride}>
    <BrowserRouter>
      <Routes>
        <Route path="/board" element={<BoardPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/create-project" element={<CreateProjectPage/>}/>
        <Route path="/edit-ticket" element={<EditTicketFullPage/>}/>
        <Route path="/" element={<SelectProjectPage/>}/>
        <Route path='*' element={<NotFound404Page/>}/>
        <Route path="/note" element={<HomePage/>}/>
        <Route path="/reminder" element={<ReminderPage/>}/>
        <Route path="/bin" element={<BinPage/>}/>
        <Route path='/create-note' element={<CreateNotePage/>}/>
        <Route path='/reset-password' element={<ResetPasswordPage/>}/>
        <Route path='/delete-account' element={<DeleteAccountPage/>}/>

        <Route path='/reset-password-kai' element={<ResetPasswordKAIPage/>}/>
        <Route path='/delete-account-kai' element={<DeleteAccountKAIPage/>}/>
      </Routes>
    </BrowserRouter></Authenticator></Card></div>);
  }
//export default withAuthenticator(App ,  true  /*{signIn},{signOut},{signUp},*/);
//export default  App;