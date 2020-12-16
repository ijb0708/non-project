FROM centos:7

RUN yum update -y
RUN yum install epel-release -y
RUN yum install npm nodejs -y

CMD echo complete
