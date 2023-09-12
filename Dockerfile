FROM node:14.17.5
WORKDIR /usr/src/xsis-api
COPY ./ ./
RUN npm install --silent
EXPOSE 3001
CMD ["npm", "start"]

#docker build -t xsis-api .
#docker run -p 3001:3001 -it --name xsis-api --mount target=/usr/src/xsis-api xsis-api

