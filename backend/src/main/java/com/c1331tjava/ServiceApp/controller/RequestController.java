package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.service.RequestService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/request")
@AllArgsConstructor
public class RequestController {

    RequestService requestService;

    @GetMapping("/list/page/{page}")
    public Page<Request> findByClientAndActive(@PathVariable int page, Pageable pageable){

        Pageable twoPerPage = PageRequest.of(page, 2);

        // Buscar userEntity con el usuario sacado del token
        UserEntity userEntity = new UserEntity();

        return this.requestService.findByClientAndActiveTrue(userEntity, twoPerPage);

    }

}
