# SEPT Deploy and Run

### Get the code
`Git clone https://github.com/RMIT-SEPT/majorproject-4-wed-18-30-6.git`

### Backend Setup
Before the begining of the deployment, it is best to understand how the app works. The application architecture consits of just 1 backend code and 1 frontend code. The database is under our account which is fully managed by google. If you don't have firebase yet and you choose to use your own firebase, please refer to this link [https://firebase.google.com/](https://firebase.google.com/). Then head to `backend/src/../FirebaseInitializr.java` change the credential to yours.

Depending on how you want to deploy, you may want to choose one of these 3 options to deploy the backend:

| Circle CI     | Localhost         | Manual Cloud Deploy  |
| ------------- |:-------------:| -----:|
| create a new folder .circleCI      | Install maven | Install your cloud pre-requisite such as gcloud CLI or AWS CLI |
| Either use our config.yml file(you need to change the credentials) or create your own     | Run `cd backend` then `./mvnw spring-boot:run` |  `cd backend` then `docker build` to dockerize your app  |
| Setup your circle CI and connect to your own Github and also setup AWS account |       |  Deploy the docker image into your cloud container    |
| Git push to your Github | | |

### Frontend Setup
After deploying the backend, you may deploy the frontend.

To test the frontend you will want to make sure your shell is located within the frontend folder. Use 'cd' if not. Run the frontend by calling 'npm run dev', this will start a local instance of react where you can run the website on your own machine.

To deploy the frontend to heroku follow the following tutorial https://devcenter.heroku.com/articles/git and then call 'git push heroku master'. The frontend will now be deployed on heroku.