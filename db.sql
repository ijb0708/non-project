create user 'empty'@'%' identified by 'empty123';

create schema empty_book default character set utf8; 

GRANT ALL privileges ON empty_book.* TO 'empty'@'%';

create TABLE users (
	useid varchar(20) not null primary key,
	win int,
	lose int,
	isUse char(1)
);

create table rooms (
	roomid char(10) not null primary key,
	roomname char(20),
	heads int,
	host char(20),
	create char(8)
)