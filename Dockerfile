FROM nginx
COPY nginx.conf /var/www/html
COPY movie.html /var/www/html
COPY  movie.css  /var/www/html
COPY movie.js  /var/www/html