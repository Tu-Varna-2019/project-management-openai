import { Button, Heading , useTheme , Image, Text, View, Authenticator, Card } from '@aws-amplify/ui-react';
import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';

export function AppFunc () {

    const AppComponentOverride = {
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
                onClick={() => alert('Graduation thesis by Iliyan Kostov')}/>
            </View>);},
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
                opacity="100%"/>
              </View></View>);},
        SignIn: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Sign in to your account
              </Heading>);},
          Footer() {
            const { toResetPassword } = useAuthenticator();
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toResetPassword}
                  size="small"
                  variation="link">
                  Reset Password
                </Button></View>);},},
        SignUp: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Create a new account
              </Heading>);},
          Footer() {
            const { toSignIn } = useAuthenticator();
            return (
              <View textAlign="center">
                <Button
                  fontWeight="normal"
                  onClick={toSignIn}
                  size="small"
                  variation="link">
                  Back to Sign In
                </Button></View>);},},
        ConfirmSignUp: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Enter Information:
              </Heading>);},
          Footer() {
            return <Text>Footer Information</Text>;},},
        SetupTOTP: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Enter Information:
              </Heading>);},
          Footer() {
            return <Text>Footer Information</Text>;},},
        ConfirmSignIn: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Enter Information:
              </Heading>);},
          Footer() {
            return <Text>Footer Information</Text>;},},
        ResetPassword: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Enter Information:
              </Heading>);},
          Footer() {
            return <Text>Footer Information</Text>;},},
        ConfirmResetPassword: {
          Header() {
            const { tokens } = useTheme();
            return (
              <Heading
                padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                level={3}>
                Enter Information:
              </Heading>);},
          Footer() {
            return <Text>Footer Information</Text>;},
        },};

    const logoURL = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandslogos.com%2Fwp-content%2Fuploads%2Fimages%2Flarge%2Faws-ec2-logo.png&f=1&nofb=1&ipt=78ee68f6d41e0800d935d8fe600c6abac3d3316581a94380c3e6db839e682106&ipo=images";
    return {
        AppComponentOverride,
        logoURL
    }
}