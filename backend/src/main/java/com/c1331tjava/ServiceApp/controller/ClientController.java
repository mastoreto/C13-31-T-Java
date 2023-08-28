package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.config.SecurityConfig;
import com.c1331tjava.ServiceApp.dto.ClientDTO;
import com.c1331tjava.ServiceApp.exception.CrossUserException;
import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.service.UserEntityService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Class to handle Client side REST requests of UserEntity.class
 */
@RestController
@RequestMapping("/api/v1/client")
@AllArgsConstructor
public class ClientController {

    SecurityConfig securityConfig;
    UserEntityService userEntityService;

    @Autowired
    ModelMapper modelMapper;


    /**
     * Endpoint to retrieve Client details using username extracted from token
     *
     * @return User details
     */
    @Operation(summary = "Get a Client User by its username(email)",
            description = "<p>Only authorized to Client users.</p>" +
                    "<p>Extract query username from JWT</p>")
    @GetMapping("/details")
    public ClientDTO findByEmail(@Valid @ParameterObject ClientDTO clientDTO){

        String currentUser = securityConfig.getUserNameFromToken();

        if (!currentUser.equals(clientDTO.getEmail())){
            throw new CrossUserException();
        }

        UserEntity currentUserEntity;
        try {
            currentUserEntity = this.userEntityService.findByEmail(currentUser).get();
        } catch (Exception e) {
            throw new CustomedHandler(e.getMessage());
        }
        return modelMapper.map(currentUserEntity,ClientDTO.class);
    }
}
