create table employees(
id serial primary key,
first_name varchar(80),
last_name varchar(80),
job_title varchar(80),
salary int
);


insert into employees (first_name, last_name, job_title, salary)
values('yoyi','Jojo','teacher',30000);
select * from employees
