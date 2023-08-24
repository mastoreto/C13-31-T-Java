package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.repository.RequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class RequestService {

    RequestRepository requestRepository;

    public Page<Request> findByClientAndActiveTrue(UserEntity userEntity, Pageable pageable){

        return this.requestRepository.findByClientAndActiveTrue(userEntity, pageable);

    }

}
