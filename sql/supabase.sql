create table services(
id bigint generated always as identity primary key,
title text,
category text,
price bigint
);