package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.dto.LoginUserDto;
import com.c1331tjava.ServiceApp.dto.RegisterUserDto;
import com.c1331tjava.ServiceApp.exception.UserAlreadyExistException;
import com.c1331tjava.ServiceApp.security.filter.JwtUtil;
import com.c1331tjava.ServiceApp.service.I_UserService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

/**
 * This class represents the REST controller for handling authentication and user registration.
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
@NoArgsConstructor
public class AuthController {

    @Autowired
    private I_UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    /**
     * Endpoint for user login.
     *
     * @param loginUserDto The data transfer object containing user login credentials.
     * @return ResponseEntity with a JWT token in case of successful authentication, or an error message if authentication fails.
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginUserDto loginUserDto) {
        try {
            // Authenticate the user using provided credentials
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginUserDto.getEmail(),
                            loginUserDto.getPassword()
                    )
            );

            // Set the authentication in the security context
            SecurityContextHolder.getContext().setAuthentication(authentication);

            // Generate JWT token
            String token = jwtUtil.generateAccesToken(loginUserDto.getEmail());

            // Return JWT token in the response
            Map<String, String> responseBody = new HashMap<>();
            responseBody.put("token", token);
            return new ResponseEntity<>(responseBody, HttpStatus.OK);
        } catch (BadCredentialsException e) {
            // Return an error response if authentication fails
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    /**
     * Endpoint for user registration.
     *
     * @param registerUserDto The data transfer object containing user registration details.
     * @return ResponseEntity with a success message in case of successful registration, or an error message if registration fails.
     */
    @PostMapping("/register")
    public ResponseEntity<?> createUser(@Valid @RequestBody RegisterUserDto registerUserDto) {
        try {
            userService.save(registerUserDto);
        } catch (UserAlreadyExistException ue) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("error", "This user already exists"));
        }
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }
}

