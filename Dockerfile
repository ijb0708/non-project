FROM centos:7

RUN yum update -y
RUN yum install epel-release -y
RUN yum install npm nodejs -y

COPY ./backend /root/node-server

EXPOSE 2000