# Full-Stack-Web-Development
Creating a full stack website using MERN


System Overview:

    React Front-End:
        Create a React app that provides the user interface for registration, login, and the main page.
        Use React Router to manage navigation between registration, login, and the main page.
        Implement registration and login forms to send user credentials to the Express.js backend for authentication.

    Node.js and Express.js Backend:
        Use Express.js to handle routes and requests.
        Set up routes for user registration, login, and main page functionality.
        Use express-session middleware to manage user sessions and maintain session state.
        Implement authentication middleware to protect routes that require a logged-in user.
        Use MongoDB to store user information (username, password, current count) and session data.

    MongoDB Database:
        Set up a MongoDB database to store user information and session data.
        Create a collection for user data, where each document contains the username, hashed password, and current count.
        Create a collection for session data to manage user sessions.

Interaction Flow:

    User Registration:
        User enters a username and password in the React registration form.
        The React app sends a POST request to the Express.js server with the user's credentials.
        The Express.js server hashes the password, stores the user in the MongoDB database, and creates a session for the user.
        The user is redirected to the main page after successful registration.

    User Login:
        User enters a username and password in the React login form.
        The React app sends a POST request to the Express.js server with the login credentials.
        The Express.js server checks the credentials, creates a session for the user, and redirects to the main page.

    Main Page (Logged In):
        The React app fetches the user's current count from the Express.js server using an authenticated request.
        The user sees the current count and can click the button to increment it.
        The React app sends a POST request to the Express.js server to increment the user's count.

    Logout:
        The user clicks the logout link.
        The React app sends a logout request to the Express.js server, which destroys the user's session.
        The user is redirected to the landing page.

Summary:

In this system, React provides the user interface, Node.js and Express.js handle server-side logic and  MongoDB stores user information and session data. The components work together to provide user registration, login, main page functionality, and session management. The described interaction flow enables users to have personalized counts and maintain their logged-in state while using the application.
