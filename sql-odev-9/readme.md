1. ```SELECT city, country FROM city JOIN country ON (country.country_id = city.country_id);```

2. ```SELECT first_name, last_name, payment_id FROM payment JOIN customer ON (payment.customer_id = customer.customer_id);```

3. ```SELECT rental_id,first_name,last_name FROM customer JOIN rental ON(customer.customer_id = rental.customer_id);```
