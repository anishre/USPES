CREATE TABLE invoice (
    id int(11) NOT NULL AUTO_INCREMENT,
    year_joined year(4) NOT NULL,
    semester char(5) NOT NULL,
    course_code varchar(10) NOT NULL,
    course_name varchar(20) NOT NULL,
    amount decimal(13,2)NOT NULL,
    PRIMARY KEY (id)
);