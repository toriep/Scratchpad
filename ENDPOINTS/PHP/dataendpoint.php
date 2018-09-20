<?php

// print_r($_GET);//take all the data being sent with GET, put them into an array and print out that array


$cars = [
    'toyota'=>[
        'camry'=>['wheels'=>4, 'engine'=>2.4, 'price'=>36000],
        'corolla'=>['wheels'=>4, 'engine'=>1.4, 'price'=>24000]
    ],
    'ford'=>[
        'taurus'=>['wheels'=>4, 'engine'=>1.8, 'price'=>30000],
        'explorer'=>['wheels'=>4, 'engine'=>2.5, 'price'=>35000]
    ]
];

if(!empty($_GET['make']) && isset($cars[$_GET['make']])){//
    $make = $_GET['make'];
    $wantedCars = $cars[$make];
} else{
    $wantedCars = $cars;
}

$json_cars = json_encode($wantedCars);

print($json_cars);//car is a complex object so it needs to be serialized/stringified. You always print out a serialized form of the data
?>