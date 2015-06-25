drop database if exists mycl;
create database mycl;

create table users (
    _id mediumint not null auto_increment,
    username char(30) not null,
    password char(30) not null,
    lastlogin date,
    primary key(_id)
);

insert into users values
("jeremy","cosmo");

create table userdata (
    userid mediumint,
    firstname char(30),
    lastname char(30),
    email varchar(50),
    location char(50),
    joindate date,
    constraint cuserid foreign key (userid) references users(_id)
);

create table posts (
    _id mediumint not null auto_increment,
    userid mediumint,
    postdate date,
    title varchar(50),
    posttext text,
    primary key(_id),
    constraint cpost foreign key (userid) references users(_id)
);

create table comments (
    _id mediumint not null auto_increment,
    userid mediumint,
    commentdate date,
    commenttext text,
    primary key (_id),
    constraint ccomment foreign key (userid) references users(_id)
);

create table composers (
    _id mediumint not null audo_increment,
    firstname varchar(30),
    lastname varchar(30),
    birthcity varchar(30),
    birthcountry varchar(30),
    birthyear smallint,
    birthmonth tinyint,
    birthday tinyint,
    deathyear smallint,
    deathmonth tinyint,
    deathday tinyint,
    biotext text
);

create table works (
    _id mediumint not null auto_increment,
    composerid mediumint,
    title varchar(100),
    workyear smallint,
    key varchar(10),
    movements tinyint,
    primary key(_id),
    constraint cwork foreign key (composerid) references composers(_id)
);

create table worktags (
    workid mediumint,
    worktag varchar(30),
    constraint ctag foreign key (workid) references works(_id)
);

create table reviews (
    _id mediumint not null primary key,
    userid mediumint,
    reviewdate date,
    rating tinyint,
    title varchar(50,
    reviewtext text,
    constraint creview foreign key (userid) references users(_id)
);

create table likes (
    userid mediumint,
    reviewid mediumint
    constraint cuserlike foreign key (userid) references users(_id),
    constraint creviewlike foreign key (reviewid) references reviews(_id)
);

/*
create table composertags (
);

create table activities (
);
*/
