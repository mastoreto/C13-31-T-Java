package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.repository.I_UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserEntityService {

    I_UserRepository userRepository;

    public Optional<UserEntity> findByEmail(String email){

        try {
            return userRepository.findByEmail(email);
        } catch (Exception e) {
            throw new CustomedHandler(e.getMessage());
        }

    }

    public Optional<UserEntity> findById(Long id){
        try {
            if (this.userRepository.findById(id).isPresent()){
                return this.userRepository.findById(id);
            }
        } catch (Exception e) {
            throw new CustomedHandler(e.getMessage());
        }
        throw new CustomedHandler ("Invalid UserEntity Id");
    }

}
