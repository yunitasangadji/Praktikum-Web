<?php

namespace Controller;
class Controller
{
    var $controllerName;
    var $ControllerMethod;

    public function getControllerAttribute()
    {
        return [
            "ConrtollerName" => $this->controllerName,
            "Method" => $this->ControllerMethod,
        ];
    }

}