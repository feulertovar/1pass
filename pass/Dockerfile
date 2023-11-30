# Stage 1: Build the application
FROM maven:3.8.4 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Create a minimal JRE image and copy the JAR file
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar /app/app.jar

# Set environment variables if needed
# ENV SPRING_PROFILES_ACTIVE=production

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "/app/app.jar"]
