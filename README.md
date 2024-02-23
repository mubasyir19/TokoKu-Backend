# TokoKu Backend API

- [Customer](#customer)
  - [(POST) Register](#post-register)
  - [(POST) Login](#post-login)

# Customer

## (POST) Register

```
/register
```

### Body

- JSON

```
{
  "nama_pelanggan": "Pelanggan 1",
  "email": "pelanggan1@example.com",
  "username": "pelanggan1",
  "alamat": "Jatikramat, Bekasi",
  "no_telepon": "0894561237",
  "password": "rahasia",
  "confirmPassword": "rahasia"
}
```

### Response

- 201 Created

```
{
    "message": "register successful"
}
```

- 400 Bad Request

```
{
    "message": "all input is required"
}
{
    "message": "email is already taken"
}
```

## (POST) Login

```
/login
```

### Body

- JSON

```
{
  "usernameEmail": "pelanggan1@example.com",
  "password": "rahasia"
}
```

### Response

- 200 OK

```
{
    "message": "login successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlczJAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMTUzNTMwLCJleHAiOjE3MDExODIzMzB9.w-hUfVNveYh2zLr2Wrv7yACJEbIhGREnLvj8cdGAdp0"
}
```

- 400 Bad Request

```
{
    "message": "all input is required"
}
```

- 401 Unauthorized

```
{
    "message": "email or password is wrong"
}
```
