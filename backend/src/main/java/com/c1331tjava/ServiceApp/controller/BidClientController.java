package com.c1331tjava.ServiceApp.controller;

import com.c1331tjava.ServiceApp.config.SecurityConfig;
import com.c1331tjava.ServiceApp.dto.BidDTO;
import com.c1331tjava.ServiceApp.exception.CrossUserException;
import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Bid;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.service.BidService;
import com.c1331tjava.ServiceApp.service.RequestService;
import com.c1331tjava.ServiceApp.service.UserEntityService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Class to handle Client side REST request of Bid.class
 */
@RestController
@RequestMapping("/api/v1/client/bid")
@AllArgsConstructor
public class BidClientController {

    BidService bidService;
    UserEntityService userEntityService;
    RequestService requestService;
    @Autowired
    ModelMapper modelMapper;

    SecurityConfig securityConfig;

    /**
     * Endpoint to hande REST request of Bid details
     *
     * @param id: Id of requested bid details
     * @return BidDTO with details of a Bid filtered by Provider and Request
     */

    @Operation(summary = "Get Bid details by id",
            description = "<p>Only authorized to Client users.</p>" +
                    "<p>Extract query username from JWT.</p>" +
                    "<p>A user can only query about bids of owned request. </p>")
    @GetMapping("/details/{id}")
    public BidDTO findByProviderAndRequest(@PathVariable Long id){

        String currentUser = securityConfig.getUserNameFromToken();
        Bid currentBid;
        Request currentRequest;

        // Query Bid by Id and the Request it belongs
        try {
            currentBid = this.bidService.findById(id).get();
        } catch (Exception e) {
            throw new CustomedHandler("Error retrieving data from Bid database");
        }
        try {
            currentRequest = this.requestService.findById(currentBid.getRequest().getId()).get();
        } catch (Exception e) {
            throw new CustomedHandler("Error retrieving data from Request database");
        }

        // If the user owner of the request differ to currentuser, throw cross user exception
        if (!currentRequest.getClient().getEmail().equals(currentUser)){
            throw new CrossUserException();
        }
        return modelMapper.map(currentBid, BidDTO.class);
    }
}
