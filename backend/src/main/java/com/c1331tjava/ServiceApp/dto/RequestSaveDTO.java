package com.c1331tjava.ServiceApp.dto;

import com.c1331tjava.ServiceApp.model.ImagesR;
import com.c1331tjava.ServiceApp.model.Zone;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Set;

@Data
public class RequestSaveDTO {
    @NotNull
    private String zoneDTO;
    @NotNull
    private String description;
    private String comments;
    private Set<String> imagesDTO;
}
