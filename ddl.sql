UPDATE social_media.user
SET
username ="req.body.username",
email = <{email: }>,
password = <{password: }>,
first_name = <{first_name: }>,
last_name = <{last_name: }>,
nickname = <{nickname: }>,
gender = <{gender: }>,
birth_date = <{birth_date: }>,
current_city = <{current_city: }>,
hometown = <{hometown: }>
WHERE id = <{expr}>;
