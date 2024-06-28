# main/notification

## Запуск dev
### Npm
```shell
npm install
```
```shell
npm run dev
```

## Prisma

### Сгенерировать конфиг для базы(после npm install и после изменения названия пароля адреса бд)
### Npm
```shell
npx prisma generate --schema=./prisma/schema.prisma
```
### Bun
```shell
prisma generate --schema=./prisma/schema.prisma
```

### После изменении/создании модели нужно написать
### Npm
```shell
npx prisma migrate dev
```
### Bun
```shell
prisma migrate dev
```

### Запись в БД первоначальных данных из файла seed.js
### Npm
```shell
npx prisma db seed
```
### Bun
```shell
prisma db seed
```
### Запуск Prisma studio
### Npm
```shell
npx prisma studio
```
### Bun
```shell
prisma studio
```