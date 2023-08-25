package com.c1331tjava.ServiceApp.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

/**
 * A Data Transfer Object (DTO) representing the login credentials of a user.
 */
@Data
public class LoginUserDto {

    /**
     * The username for authentication.
     */
    @NotNull
    private String email;

    /**
     * The password for authentication.
     */
    @NotNull
    private String password;
}

