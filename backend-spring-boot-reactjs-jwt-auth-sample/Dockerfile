FROM tomcat:9-jre8-alpine
MAINTAINER Eyraf Abdullayev <eyrafabdullayev@gmail.com>
EXPOSE 8080
RUN rm -rf /usr/local/tomcat/webapps/*
COPY ./target/sample.war /usr/local/tomcat/webapps/ROOT.war
CMD ["catalina.sh","run"]
