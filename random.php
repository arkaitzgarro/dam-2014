<?php

    $alumnos = array(
        "Yosu",
        "Patxi",
        "Jokin",
        "Felipe",
        "Rosa",
        "Mikel",
        "Alex Balseiro",
        "Ekaitz",
        "Alex Molinero",
        "Iñigo",
        "Asier",
        "Ibai",
        "Ander",
        "Iñaki",
        "Manuel"
    );

    shuffle($alumnos);

    $rand_key = array_rand($alumnos);
    echo $alumnos[$rand_key]."\r\n";

?>