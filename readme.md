* SELECT DISTINCT replacement_cost FROM film;
* SELECT COUNT(DISTINCT replacement_cost) FROM film;
* SELECT COUNT(title) FROM film WHERE title = 'T%' AND rating IN ('G');
* SELECT COUNT(country) FROM country WHERE LENGTH(country) = 5;
* SELECT COUNT(*) FROM city WHERE city ILIKE '%r';