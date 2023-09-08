# Project Summary

Rants is a website where users can post, view, and search for rants from others on the platform. 

The project uses a full-stack MERN framework. Users can login/create an account, with personal information encrypted by bcrypt/jsonwebtoken on the backend. Once logged in, users can view other's posts in a scrolling feed. Each rant includes the user/writer of the post, a date timestamp, and the content of the rant. Users can also view other user's profiles at-a-glance by viewing their total number of posts and different posts. Currently, all posts are visible by everyone, and posts are sorted chronologically. 

Time spent: ~3.5 hrs (sorry for the rushed CSS - didn't realize this was due so early)

# Feature List
- Login + user auth
- Interactive user platform (can read other user posts)
- API calls to the backend: https://rants-backend.vercel.app/
- Connected w/ MongoDB backend, which has collections for users and rants
- Filtering on-screen data
- Router navigation across different pages (partially)

# Details for Running

Hop on https://rants-eight.vercel.app/login to access the webapp. You will be prompted with a login screen. Returning users can sign in with their credentials while new users must click "New User?" to create a new account. Usernames must be at least 3 characters and passwords must be at least 8.

Once you are able to log in, you will see a feed of posts. Each of these posts is interactive and can be clicked to see the profile of the rant creator. The user's own profile can also be viewed by clicking "Profile". The "Profile" page displays a user's username along with their past posts (if they have any).

The "Explore" button on the left sidebar allows users to access their feed. This can also be accessed by going to https://rants-eight.vercel.app/feed or clicking the "Welcome, [username]" at the top.

Upon clicking the "Create" button, users have access to a page where they can write new posts in a large text box. The large text box supports extremely long rants, and in fact, in-depth rants are preferred: rants are not allowed to be under 400 characters. Go crazy.

At the top is the toolbar, which includes the filter bar. Instead of searching for different posts, the filter bar is a live filter for users to cut down what they see on screen. The filter bar can be used to find posts from particular dates, users, and/or with certain content (currently, only exact matches for each of these are supported). The filter bar can be used both within one's feed as well as when searching someone's profile. 

The upper toolbar also allows users to log out and share the link with friends.

Happy Ranting!


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
