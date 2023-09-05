package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.config.SecurityConfig;
import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Bid;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.model.Work;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OperationsService {
    WorkService workService;
    RequestService requestService;
    UserEntityService userEntityService;
    SecurityConfig securityConfig;

    public void selectBidAndCreateNewWork(Bid bid){

        //First create new Work using data from the request
        Work newWork = new Work();
        Request currentRequest = bid.getRequest();
        newWork.setClient(currentRequest.getClient());
        newWork.setProvider(bid.getProvider());
        newWork.setStarDate(LocalDateTime.now());
        newWork.setBid(bid);
        newWork.setRequest(currentRequest);
        newWork.setActive(true);
        newWork.setEnded(false);
        workService.save(newWork);

        //Second sets the request as ended
        currentRequest.setEnded(true);
        requestService.save(currentRequest);


    }
    public UserEntity getAuthenticatedUser(){
        Optional<UserEntity> optU = userEntityService.findByEmail(securityConfig.getUserNameFromToken());
        if (optU.isPresent()){
            return optU.get();
        } else throw new CustomedHandler("Error acquiring authenticated user");
    }


}
