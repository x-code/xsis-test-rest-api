# Xsis API
Install:
```markdown
npm install
npm install --save-dev sequelize-cli
```

Running:
```markdown
npm start
```

================================================================

Migrate DB:
```markdown
npx sequelize-cli db:migrate
```
Seeder DB Dummy:
```markdown
npx sequelize-cli db:seed:all
```
================================================================

Docker Setup:

```markdown
docker build -t xsis-api .
```
Docker Run:

```markdown
docker run -p 3000:3000 -it --name xsis-api --mount target=/usr/src/xsis-api xsis-api
```

================================================================

# Postman
```markdown
https://api.postman.com/collections/16071624-51c77edc-ec29-4fb1-a86c-07b785d98fd9?access_key=PMAT-01HA4SDXRWDJRB3DTGXPKBEZAX
```

