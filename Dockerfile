FROM centos:7

RUN yum update -y
RUN yum install epel-release -y
RUN yum install npm nodejs -y
RUN yum install mariadb-server -y

COPY ./db.sql  /docker-entrypoint-initdb.d
COPY ./backend /root/node-server

EXPOSE 2000