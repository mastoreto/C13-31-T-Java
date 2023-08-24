package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.service.RequestService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class RequestController {

    RequestService requestService;

}
