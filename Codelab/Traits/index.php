<?php
    include "Controllers/ProductController.php";
use Controller\ProductCobtroller;
$productController = new ProductCobtroller;

echo $productController -> getAllProduct();
