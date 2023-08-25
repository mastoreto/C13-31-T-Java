package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.dto.RegisterUserDto;
import com.c1331tjava.ServiceApp.exception.UserAlreadyExistException;
import com.c1331tjava.ServiceApp.model.Area;
import com.c1331tjava.ServiceApp.model.Role;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.model.enums.AreasNames;
import com.c1331tjava.ServiceApp.model.enums.RolesNames;
import com.c1331tjava.ServiceApp.repository.I_UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
/**
 * Service implementation for user registration and authentication.
 */
@Service
public class AuthServiceImpl implements I_UserService {
    @Autowired
    I_UserRepository userRepository;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    I_RoleService roleService;
    @Autowired
    I_AreaService areaService;
    @Autowired
    PasswordEncoder passwordEncoder;
    /**
     * Saves a new user registration.
     *
     * @param user The user registration data.
     * @throws UserAlreadyExistException If the user already exists.
     */
    @Transactional
    @Override
    public RegisterUserDto save(RegisterUserDto user) throws UserAlreadyExistException {

        List<Role>userRoles=new ArrayList<>();
        UserEntity userEntity=modelMapper.map(user,UserEntity.class);
        userEntity.setPassword(passwordEncoder.encode(user.getPassword()));
        userEntity.setRoles(setRole(user.getRoles()));
        userEntity.setAreas(setArea(user.getAreas()));
        userEntity.setActive(true);
        if (userRepository.findByEmail(userEntity.getEmail()).isPresent()){
            throw new UserAlreadyExistException("Este Usuario ya existe");
        }else {
            userRepository.save(userEntity);
        }
        return user;
    }
    private Random random = new Random();
    private List<Role> setRole(List<String> roles) {
        List<Role> aux = new ArrayList<>();
            for (int i=0;i<roles.size();i++){
                aux.add(this.roleService.findByName(setErole(roles.get(i))));
            }
        return aux;
    }
    private long generateRandomId() {
        return random.nextLong();
    }
    private RolesNames setErole(String rol) {
        RolesNames aux = null;
        if (rol.equalsIgnoreCase("Client")) {
            aux = RolesNames.Client;
        } else if (rol.equalsIgnoreCase("Provider")) {
            aux = RolesNames.Provider;
        } else if (rol.equalsIgnoreCase("Admin")) {
            aux = RolesNames.Admin;
        }
        return aux;
    }
    private List<Area> setArea(List<String> areas) {
        List<Area> aux = new ArrayList<>();
        for (int i=0;i<areas.size();i++){
            aux.add(this.areaService.findByName(setEArea(areas.get(i))));
        }
        return aux;
    }
    private AreasNames setEArea(String rol) {
        AreasNames aux = null;
        if (rol.equalsIgnoreCase("Masonry")) {
            aux = AreasNames.Masonry;
        } else if (rol.equalsIgnoreCase("Plumbing")) {
            aux = AreasNames.Plumbing;
        } else if (rol.equalsIgnoreCase("Smithy")) {
            aux = AreasNames.Smithy;
        }
        return aux;
    }
}
