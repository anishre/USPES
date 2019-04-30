CREATE TABLE `BSE` (
    `pid` CHAR(11) NOT NULL,
    `progname` VARCHAR(255) NOT NULL,
    `course_code` VARCHAR(255) NOT NULL,
    `course_name` VARCHAR(255) NOT NULL,
    `sem_offered` CHAR(10) NOT NULL,
    `prereq` VARCHAR(255) NOT NULL,
    `status` enum('Available','Enrolled', 'Completed') NOT NULL
);