create user 'empty'@'%' identified by 'empty123';

create schema empty_book default character set utf8; 

GRANT ALL privileges ON empty_book.* TO 'empty'@'%';