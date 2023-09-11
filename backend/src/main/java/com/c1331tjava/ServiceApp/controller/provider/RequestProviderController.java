package com.c1331tjava.ServiceApp.controller.provider;

import com.c1331tjava.ServiceApp.dto.provider.RequestListPagedDTO;
import com.c1331tjava.ServiceApp.exception.CustomedHandler;
import com.c1331tjava.ServiceApp.model.Request;
import com.c1331tjava.ServiceApp.model.UserEntity;
import com.c1331tjava.ServiceApp.model.Zone;
import com.c1331tjava.ServiceApp.model.enums.ZonesNames;
import com.c1331tjava.ServiceApp.service.OperationsService;
import com.c1331tjava.ServiceApp.service.RequestService;
import com.c1331tjava.ServiceApp.service.ZoneService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/provider/request")
@AllArgsConstructor
public class RequestProviderController {

    OperationsService operationsService;
    RequestService requestService;
    ZoneService zoneService;

    /**
     *
     * @param pageable
     *
     * @return
     */
    @Operation(summary = "Get paged list of requests that has postulated",
            description = "<p>Only authorized to Provider users.</p>" +
                    "<p>Extract query username from JWT</p>")
    @GetMapping("/postuled/paged")
    public RequestListPagedDTO findByProvider(@ParameterObject Pageable pageable){

        UserEntity currentUser = operationsService.getAuthenticatedUser();
        Page<Request> requestPaged = requestService.findByProvidersContaining(currentUser, pageable);
        return new RequestListPagedDTO(requestPaged);
    }

    @Operation(summary = "Get paged list of open requests order by publication date",
            description = "<p>Only authorized to Provider users.</p>" +
                    "<p>Optional: criteria -> String with search criteria</p>")
    @GetMapping("/list/bydate")
    public RequestListPagedDTO findByDescriptionAndEndedFalseOrderByDate(@ParameterObject String criteria, @ParameterObject Pageable pageable){

        Page<Request> requestPaged = requestService.findByDescriptionContainingAndEndedFalseOrderByDate(criteria, pageable);
        return new RequestListPagedDTO(requestPaged);
    }

    @Operation(summary = "Get paged list of open requests of a specific zone, order by publication date",
            description = "<p>Only authorized to Provider users.</p>" +
                    "<p>Optional: criteria -> String with search criteria</p>")
    @GetMapping("/list")
    public RequestListPagedDTO findByDescriptionContainingAndByZoneAndEndedFalseOrderByDate (
            @ParameterObject String criteria,
            @ParameterObject String zone,
            @ParameterObject Pageable pageable){

        Zone currentZone = zoneService.findByName(ZonesNames.valueOf(zone));
        Page<Request> requestPaged = requestService
                .findByDescriptionContainingAndZoneAndEndedFalseOrderByDate(
                        criteria,currentZone, pageable);
        return new RequestListPagedDTO(requestPaged);
    }


}
