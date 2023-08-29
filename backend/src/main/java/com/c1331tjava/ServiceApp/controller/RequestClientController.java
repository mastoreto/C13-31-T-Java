package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.config.SecurityConfig;
import com.c1331tjava.ServiceApp.dto.ClientDTO;
import com.c1331tjava.ServiceApp.dto.RequestListPagedDTO;
import com.c1331tjava.ServiceApp.exception.CrossUserException;
import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.service.RequestService;
import com.c1331tjava.ServiceApp.service.UserEntityService;
import io.swagger.v3.oas.annotations.Operation;
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
 * Class to handle Client side REST requests of Request.class
 */
@RestController
@RequestMapping("/api/v1/client/request")
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
    @Operation(summary = "Get paged Request list of a client",
            description = "<p>Only authorized to Client users.</p>" +
                    "<p>Extract query username from JWT</p>")
    @GetMapping("/list/paged")
    public RequestListPagedDTO findByClientAndActive(@ParameterObject Pageable pageable){

        String currentUser = securityConfig.getUserNameFromToken();

        UserEntity currentUserEntity;

        try {
            currentUserEntity = this.userEntityService.findByEmailAndActiveTrue(currentUser).get();
        } catch (Exception e) {
            throw new CustomedHandler("Error retrieving user details from database");
        }
        Page<Request> RequestPaged = null;
        try {
            RequestPaged = this.requestService.findByClientAndActiveTrue(currentUserEntity, pageable);
        } catch (Exception e) {
            throw new CustomedHandler("Error accessing Request database");
        }
        return new RequestListPagedDTO(RequestPaged);
    }

}
