[![Quality Gate Status](https://wes06teapp15066sonrqa.azurewebsites.net/api/project_badges/measure?project=Tu-Varna-2019_Bachelors-Summer-Thesis-ProjectManagement-OpenAI_8f51f2cf-9425-46d6-b955-da27df335690&metric=alert_status&token=sqb_56d599f9205c79f43f9850280b60b2bcbb0faea1)](https://wes06teapp15066sonrqa.azurewebsites.net/dashboard?id=Tu-Varna-2019_Bachelors-Summer-Thesis-ProjectManagement-OpenAI_8f51f2cf-9425-46d6-b955-da27df335690)


# AI-driven Project management web app

# Abstract
A browser-based project management app offering the following features: 
- standard ticket handling
- user profile management
- link a ticket with GitHub commits
- Kanban boards
- PI and Sprint management
  
Integrated with ChatGPT-3.5 for supporting the agile team with:
1. auto-generate fields for ticket and ticket template
2. summarize ticket content
3. translate between English and Bulgarian and vice-versa
4. text-to-speech capabilities

# Frontend
The UI is based on ReactJS framework.
Most of the UI components are generated in ReactJS code by using Figma.

# Backend
All of the backend is hosted in AWS by using AWS Amplify framework to interact with the cloud.
The user management is managed by AWS Cognito services. A more visual example of that is the Login/Register page.
The API calls to OpenAI are executed by AWS Lambda functions in Python language. In total the project consists of 4 lambdas, each responsible of handling the respective features for interacting with ChatGPT 3.5 (excluding the text-to-speech functionality, as it's used directly in the frontend by using AWS Polly).
The database is hosted in AWS's NoSQL DynamoDB, with GraphQL query language through AWS AppSync.

# Technology Stack
- ReactJS
- Python
- AWS Amplify framework
- Figma
- ChatGPT 3.5

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
