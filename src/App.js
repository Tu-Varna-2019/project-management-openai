import logo from './logo.svg';
import './App.css';
import { withAuthenticator, Button, Heading , useTheme , Icon, Image, Text, View, Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
import { Amplify, API, graphqlOperation , Auth  } from 'aws-amplify'
import {React} from "./pages/LoginPage";
import { useAuthenticator } from '@aws-amplify/ui-react';
import LoginPage from './pages/LoginPage';
import { useHistory } from "react-router-dom";


const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.medium} >
        <Image
          alt="Amplify logo"
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvisit.varna.bg%2Fmedia%2Fcache%2Fd6%2Fa3%2Fthumb5_578893_513215228710865_629317997_n.jpg&f=1&nofb=1&ipt=f56cbaffc72885ef3727e253f1ebc746be67ad8ada19ec05808bb6480b3ea32f&ipo=images"
          height="50%"
          width="50%"
          opacity="100%"
          onClick={() => alert('Graduation thesis by Iliyan Kostov')}
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; 2023 - All Rights Reserved
        </Text>
        <View textAlign="center" padding={tokens.space.medium}>
        <Text color={tokens.colors.purple[100]}  >
            Powered by:
        </Text>
        <Image
          alt="OpenAI logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdwglogo.com%2Fwp-content%2Fuploads%2F2019%2F03%2FOpenAI_logo-300x206.png&f=1&nofb=1&ipt=e8ae75de3af0e9c4ccbe5316567d3ac1907b9be01ef1277ec9758054d25b5ddd&ipo=images"
          height="30%"
          width="30%"
          opacity="100%"
        />
        </View>
      </View>
      
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

Amplify.configure(awsExports);
export default function App() {
  return (
    <Authenticator components={components} >
    <LoginPage/>
    </Authenticator>
  );
}

//export default withAuthenticator(App ,  true  /*{signIn},{signOut},{signUp},*/);
//export default  App;