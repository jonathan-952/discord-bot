package com.beatmanager.beat.manager.service;

import org.springframework.stereotype.Service;

import com.beatmanager.beat.manager.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import tools.jackson.databind.ObjectMapper;

@Service
@RequiredArgsConstructor
public class PasswordEncoder {
    private final UserRepository userRepo;
    private final ObjectMapper objectMapper;
    


}
