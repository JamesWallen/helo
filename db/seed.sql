create table if not exists users (
    user_id serial primary key,
    username varchar(20),
    email varchar(150),
    password varchar(250),
    profile_picture text
);

create table if not exists post (
    post_id serial primary key,
    user_id int references users(user_id),
    post_url text
);