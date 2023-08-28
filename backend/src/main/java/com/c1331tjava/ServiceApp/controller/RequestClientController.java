package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.config.SecurityConfig;
import com.c1331tjava.ServiceApp.dto.requestController.RequestListPagedDTO;
import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.service.RequestService;
import com.c1331tjava.ServiceApp.service.UserEntityService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class to handle Client side REST Request of Request.class
 */
@RestController
@RequestMapping("/api/v1/request/client")
@AllArgsConstructor
public class RequestClientController {

    RequestService requestService;
    SecurityConfig securityConfig;
    UserEntityService userEntityService;
    @Autowired
    ModelMapper modelMapper;

    /**
     * Endpoint to retrieve paged list of requests filter by Client(UserEntity).
     *
     * @param pageable page=[number of page]&size=[request per page]
     * @return RequestListPageDTO with totalPages, requestPerPage, totalRequest,
     * currentPage and List<RequestDTO>;
     */
    @GetMapping("/list/paged")
    public RequestListPagedDTO findByClientAndActive(@ParameterObject Pageable pageable){

        String currentUser = securityConfig.getUserNameFromToken();

        UserEntity currentUserEntity = new UserEntity();
        try {
            currentUserEntity = this.userEntityService.findByEmail(currentUser).get();
        } catch (Exception e) {
            throw new CustomedHandler(e.getMessage());
        }
        if (!(currentUserEntity.getRoles().toString().contains("Client"))){
            throw new CustomedHandler("Wrong user Rol");
        }
        Page<Request> RequestPaged = this.requestService.findByClientAndActiveTrue(currentUserEntity, pageable);
        return new RequestListPagedDTO(RequestPaged);
    }

}
