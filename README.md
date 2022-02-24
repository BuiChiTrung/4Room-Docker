# 4Room - Docker installation

### Build the app
```
docker compose up -d 
```

### Copy built front-end code to nginx volume
```
docker exec -it 4room-docker-fe-1 sh -c "cp -Tr dist volume"
```

### (Optional) Seed database
```
docker exec -it 4room-docker-be-1 /bin/sh -c "php artisan migrate:fresh --seed"
```

### Possible issue: unable to logout
```
docker exec -it 4room-docker-be-1 sh
chmod 777 -R storage/
```