FROM node:14.17.5
WORKDIR /usr/src/xsis-api
COPY ./ ./
RUN npm install --silent
EXPOSE 3000
CMD ["npm", "start"]

#docker build -t xsis-api .
#docker run -p 3000:3000 -it --name xsis-api --mount target=/usr/src/xsis-api xsis-api

