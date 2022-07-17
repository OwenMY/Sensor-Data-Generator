# Sensor Data Generator
This is an application as part of a full stack challenge to generate fake data points and manage the data. The purpose of this application was to simulate the calibration of an virtual reality system to generate data points and be able to query the information generated. Sensor calibrations are generated at random as well as base (the main machine mechanism) sensors.  The validation performance generator is a simulation of both the base and sensors being used together and outputing how accurate the system is after calibration.  

## Come Visit the App Live!
Application is hosted on an AWS EC2 micro instance.  Also available on mobile!

http://13.57.235.108:3000/

![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

<br>

![image](https://lh3.googleusercontent.com/cM26Pd4S-yh2csd1Du53kpUMtfe_PN0JZCgC1qv36UqIZRdK0dkaFzbj3-6iFkUqgTTL16uQb4vrGKcIqD8SG6ABQH7wi173OaGFMhNuSkzwwcK_DyBoOHg6RaERI81qnEUcBFp8Jw=w2400)

![image](https://lh3.googleusercontent.com/s95j_RZyppATnzE-jDMGLYuYd4SzL26JoEq_MN2PMEmXRbwZrZOXsnia1U8mTh9ZYkuH1wIgM9-t-yP3pslb6SoBveD2xMclfNdTqP9DvG1lZEajZv62pmoodj6HuToUtFAmw94Blw=w2400)


<br>



## Getting Started
1. From a terminal, clone from [this](https://github.com/OwenMY/Sensor-Data-Generator-API.git) repo.
```
git clone https://github.com/OwenMY/Sensor-Data-Generator-API.git
```
2. Install dependencies
```
npm install
```

3. Set up `.env` using `example.env` as an example.

4. In psql, create your database
```
CREATE DATABASE (***Your Database Name goes Here**)
```

4. In the terminal, move to the 'sql' directory, log into your database and run start.sql
 ```
 \i start.sql
 ```

5. Move one directory up and run the 'build' script to transpile and bundle the application
```
npm run build
```

6. Start your server
```
npm start
```
7. Visit http://localhost:3000/
