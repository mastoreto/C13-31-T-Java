package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.model.Bid;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.repository.BidRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BidService {

    BidRepository bidRepository;

    public Optional<Bid> findById(Long id){
        return this.bidRepository.findById(id);
    }
}
