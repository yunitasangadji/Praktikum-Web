<?php

namespace Controller;

include "Traist/ResponseFormatter.php";
include "Controllers/Controller.php";

use Traist\ResponseFormatter;

class ProductController extends Controller{
    use Traist\ResponseFormatter;

    public function __construct(){
        $this->controllerName = "Get All Product";
        $this->ControllerMethod = "GET";
    }

    public function getAllProduct(){
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this->responseFormatter(200, "Succes", $response);
    }
};