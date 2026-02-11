package com.beatmanager.beat.manager.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.beatmanager.beat.manager.repository.UserRepository;
import com.beatmanager.beat.manager.repository.entity.User;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public void saveUser(User user) {
        userRepo.save(user);
    }
    
}
