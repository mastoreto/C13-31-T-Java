package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.dto.BidDTO;
import com.c1331tjava.ServiceApp.dto.bidController.BidDetailsDTO;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.service.BidService;
import com.c1331tjava.ServiceApp.service.RequestService;
import com.c1331tjava.ServiceApp.service.UserEntityService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


/**
 * Class to handle Client side REST request of Bid.class
 */
@RestController
@RequestMapping("/api/v1/bid/client")
@AllArgsConstructor
public class BidClientController {

    BidService bidService;
    UserEntityService userEntityService;
    RequestService requestService;

    @Autowired
    ModelMapper modelMapper;

    /**
     * Endpoint to hande REST request of Bid details
     *
     * @param bidDetailsDTO type: ListByProviderAndRequestDTO  contains ProviderId and RequestId
     * @return BidDTO with details of a Bid filtered by Provider and Request
     */
    @GetMapping("/details")
    public BidDTO findByProviderAndRequest(@Valid @RequestBody BidDetailsDTO bidDetailsDTO){


        //TODO: Validate that provider and request exists
        UserEntity provider = this.userEntityService.findById(bidDetailsDTO.getProviderId()).get();
        Request request = this.requestService.findById(bidDetailsDTO.getRequestId()).get();

        return modelMapper.map(this.bidService.findByProviderAndRequest(provider, request), BidDTO.class);

    }

    /**
     *
     * Class to handle @Valid exception and personalize error message
     *
     * @param ex type: MethodArgumentNotValidException, exception thrown by @Valid
     * @return Personalized error message
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = "Bad Request";
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }
}
