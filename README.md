# Xsis API

================================================================
## via NPM
Install:
```markdown
npm install
npm install --save-dev sequelize-cli
```
Migrate DB:
```markdown
npx sequelize-cli db:migrate
```
Seeder DB Dummy:
```markdown
npx sequelize-cli db:seed:all
```

Running:
```markdown
npm start
```

================================================================

## via Docker
Docker Setup:

```markdown
docker build -t xsis-api .
```
Docker Run:

```markdown
docker run -p 3001:3001 -it --name xsis-api --mount target=/usr/src/xsis-api xsis-api
```

================================================================

# Starting
Host
```markdown
localhost:3001
```
Postman
```markdown
https://api.postman.com/collections/16071624-51c77edc-ec29-4fb1-a86c-07b785d98fd9?access_key=PMAT-01HA4SDXRWDJRB3DTGXPKBEZAX
```

