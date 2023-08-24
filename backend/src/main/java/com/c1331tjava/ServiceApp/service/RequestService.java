package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.repository.RequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RequestService {

    RequestRepository requestRepository;

}
