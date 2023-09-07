package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.repository.RequestRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RequestService {

    RequestRepository requestRepository;

    /**
     * Method to find active Request by Client(type: UserEntity)
     *
     * @param userEntity Client extracted from token on controller
     * @param pageable page=[number of page]&size=[request per page]
     * @return Page<Request> Paged query result
     */
    public Page<Request> findByClientAndActiveTrue(UserEntity userEntity, Pageable pageable){

            return this.requestRepository.findByClientAndActiveTrue(userEntity, pageable);

    }

    public Optional<Request> findById(Long id) {
        try {
            return this.requestRepository.findById(id);
        } catch (Exception e) {
            throw new CustomedHandler("Error accessing database");
        }

    }

    public void save(Request request){
        this.requestRepository.save(request);
    }

}
