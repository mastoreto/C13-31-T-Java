package com.c1331tjava.ServiceApp.dto;

import com.c1331tjava.ServiceApp.model.Area;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * A Data Transfer Object (DTO) representing the information needed to register a new user.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterUserDto {


    @NotNull
    private String userName;
    @NotNull
    private String userLastname;
    @NotNull
    private String password;
    @NotNull
    private String email;
    @NotNull
    private String te;
    @Nullable
    private List<String> areas;
    @NotNull
    private List<String> roles;
}

