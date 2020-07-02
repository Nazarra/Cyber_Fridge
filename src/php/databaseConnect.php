<?php
class databaseConnect{
    private $host;
    private $user;
    private $password;
    private $databaseName;
    private $charset;

    public function connect(){



        $this->host = "localhost";
        $this->user = "root";
        $this->password = "coderslab";
        $this->databaseName = "Cyber_Fridge";
        $this->charset = "utf8mb4";


    try {
        $dsn = "mysql:host=".$this->host.";dbname=". $this->databaseName."charset=".$this->charset;
        $pdo=new PDO($dsn,$this->user,$this->password);
//        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        var_dump('udałosie');
        echo("udało się ");

        return $pdo;
    }catch (PDOException $exception){
        echo "Błąd połączenia: ".$exception->getMessage();
    }
}
}