package com.beatmanager.beat.manager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatmanager.beat.manager.config.JWTFilter;
import com.beatmanager.beat.manager.repository.ProblemRepository;
import com.beatmanager.beat.manager.repository.entity.Problem;

@Service
public class ProblemService {

    @Autowired
    private ProblemRepository problemRepo;

    @Autowired
    private JWTService jwtService;


    public Problem saveProblem(Problem payload, String authHeader) {

        String token = null;
        String username = null;

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);

            username = jwtService.extractUsername(token);
        }
        
        payload.setUserID(username);
        
        return problemRepo.save(payload);
    }

}
