FROM nginx:alpine

COPY web /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]