package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Rating;
import com.c1331tjava.ServiceApp.model.Work;
import com.c1331tjava.ServiceApp.repository.RatingRepository;
import com.c1331tjava.ServiceApp.repository.WorkRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RatingService {

    RatingRepository ratingRepository;
    public Rating save(Rating rating){
        try {
           return ratingRepository.save(rating);
        } catch (Exception e) {
            throw new CustomedHandler("Error persisting rating");
        }
    }
}
