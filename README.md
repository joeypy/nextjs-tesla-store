# Next.js Teslo-shop App

Para correr localmente, se necesita la base de datos.

```bash
docker-compose up -d
```

- El -d, significa **detached**

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

- MongoDB URL Local:

```bash
MONGO_URL=mongodb://localhost:27017/teslodb
```

- Reconstruir los módulos de node y levantar Next

```bash
yarn install
yarn dev
```

<!-- ## Llenar la base de datos con información de pruebas

Llamara:

```bash
http://localhost:3000/api/seed
``` -->
