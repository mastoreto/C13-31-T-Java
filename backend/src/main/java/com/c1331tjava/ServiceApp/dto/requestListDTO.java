package com.c1331tjava.ServiceApp.dto;

import com.c1331tjava.ServiceApp.model.ImagesR;
import com.c1331tjava.ServiceApp.model.Zone;

import java.util.Date;
import java.util.List;

public class requestListDTO {

    private Long id;

    private Date date;

    private String zone;

    private String description;

    private List<ImagesR> images;

    private Boolean ended;

}
