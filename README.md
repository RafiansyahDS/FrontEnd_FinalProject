# TOKOPEDIA PLAY CLONE - FRONTEND

This is Tokopedia Play clone for frontend final project gigih 3.0

## Features

- Display list of thumbnails of the video
- Display an embedded YouTube video in video details.
- Show a list of products related to the video details.
- Display a list of comments associated with the video details.
- Allow users to submit new comments for each video.

## How to Install & Run

1. Clone the repository:
```
https://github.com/RafiansyahDS/FrontEnd_FinalProject.git
```

2. Install the required dependencies:
```
npm install
```

3. Run the Backend server you can check on this repository:
```
https://github.com/RafiansyahDS/BackEnd_FinalProject
```

4. Start the development server:
```
npm start
```

5. Open your web browser and go to `http://localhost:3000` to access the app.

## Schema Database

The app interacts with a backend API to retrieve and submit data. 
change the `API_BASE_URL` to the Backend URL, You can check and run the Backend for this project on 
`https://github.com/RafiansyahDS/BackEnd_FinalProject`
the Backend will run on port 3001, and the API will be on `http://localhost:3001/api`
The API endpoints include:

- `/video-thumbnails`: Fetches video thumbnails.
- `/products/:videoID`: Fetches products related to a specific video.
- `/comments/:videoID`: Fetches comments related to a specific video.
- `/submit-comment`: Submits a new comment.

For more details on the API configuration, refer to the `ApiConfig.js` file.

## Technologies Used

- React for the frontend.
- Node.js for the backend.
- MongoDB for storing video details, products, and comments.
- Express.js for building the API.

## Credits

This project was developed by Rafiansyah Dwi Sadyawinata. Feel free to contribute and improve the project.

