# Getting Started

## How to Run
Gradle Commands (Run all commands within backend directory)

* To build any changes [gradlew clean build]()
* To run the application: [gradlew bootRun]()

## Before you start the Application
You must first start up a local postgres server. You can do this and set the configurations by 
navigating to this website https://www.postgresql.org/download/ and downloading version 14.1 of
postgres. 

I use the pgAdmin 4 tool to help see what is contained within the Postgres tables. Follow the
installation guide that the executable takes you through to initalize a server and an admin user.
After making the correct installation you must create a user and a server. 

Input the user, the users credentials and the name of the Postgres that you created (along with the port it is running on)
into the file [resources\application.yml](). 

YOU MUST RUN THE BACKEND FIRST.

##Software Requirements
java 17.0.1se - Java required.
