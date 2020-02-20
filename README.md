# Steps

1. Install Composer, PHP7, Mysql Server in System

2. Go to Project Directory & install the packages from repository
   ```
    $composer install/update
    ```

3. Create mysql database and set db configuration in `.env` file
    ```
    $mysql -uUSERNAME -pPASSWORD
    mysql> create database your_db_name
    ```
    - your_db_name, USERNAME , PASSWORD in .env file

4. Migrate the tables to Database
    ```
    $php artisan migrate
    ```

5. Run Laravel Server
    ```
    $php artisan serve --port=8000
    ```
    
6. then open file `./android/index.html` in browser