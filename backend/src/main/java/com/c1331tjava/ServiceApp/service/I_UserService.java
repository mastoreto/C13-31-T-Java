package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.dto.RegisterUserDto;
import org.springframework.stereotype.Service;

public interface I_UserService {
    RegisterUserDto save(RegisterUserDto user);
}
