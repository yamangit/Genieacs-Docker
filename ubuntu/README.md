# Genieacs-Docker/Ubuntu

## This docker config is tested and verified:

### Change following parameters

#### 1. GENIEACS_MONGODB_CONNECTION_URL=mongodb://<your_user>:<user_pwd>@mongodb:27017/<your_db> in genieacs.env

#### 2. Change ENV variable in Dockerfile.mongodb

## Run the docker compose

```bash
cd Genieacs-Docker/ubuntu
docker compose up -d
```

## Note: Default mongodb root username and passowrd is root/root, user credentials admin/admin with database genieacs
