FROM tomcat:9-jdk11-openjdk-slim
ARG WAR_FILE=target/*.war
COPY ${WAR_FILE} /usr/local/tomcat/webapps/app.war
CMD ["catalina.sh", "run"]
