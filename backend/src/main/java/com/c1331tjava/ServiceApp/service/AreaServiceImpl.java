package com.c1331tjava.ServiceApp.service;

import com.c1331tjava.ServiceApp.model.Area;
import com.c1331tjava.ServiceApp.model.enums.AreasNames;
import com.c1331tjava.ServiceApp.repository.I_AreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AreaServiceImpl implements I_AreaService {
    @Autowired
    I_AreaRepository areaRepository;
    @Override
    public Area findByName(AreasNames name) {
        return areaRepository.findByName(name);
    }
}
