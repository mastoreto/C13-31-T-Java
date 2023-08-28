package com.c1331tjava.ServiceApp.dto.bidController;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class BidDetailsDTO {
    @NotNull (message = "providerId must not be null")
    private Long providerId;
    @NotNull (message = "requestId must not be null")
    private Long requestId;
}
