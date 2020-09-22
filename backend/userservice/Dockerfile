FROM openjdk:8-jdk-alpine
ARG JAR_FILE=src/*.jar
COPY ${JAR_FILE} userservice-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/userservice-0.0.1-SNAPSHOT.jar"]