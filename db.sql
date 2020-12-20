create user 'empty'@'%' identified by 'empty123';

create schema empty_book default character set utf8; 

GRANT ALL privileges ON empty_book.* TO 'empty'@'%';

create TABLE users (
	useid varchar(20),
	win int,
	lose int,
	isUse char(1)
);