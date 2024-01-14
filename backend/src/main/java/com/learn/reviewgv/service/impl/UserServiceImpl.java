package com.learn.reviewgv.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.learn.reviewgv.dto.RegisterDto;
import com.learn.reviewgv.dto.UserDto;
import com.learn.reviewgv.entity.User;
import com.learn.reviewgv.exception.ResourceNotFoundException;
import com.learn.reviewgv.repository.UserRepository;
import com.learn.reviewgv.service.UserService;
import com.learn.reviewgv.utils.AppConstants.Role;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepo;
    private ModelMapper mapper;

    public UserServiceImpl(UserRepository userRepo, ModelMapper mapper) {
        this.userRepo = userRepo;
        this.mapper = mapper;
    }

    private UserDto mapToDto(User user) {
        return mapper.map(user, UserDto.class);
    }

    private User mapToEntity(RegisterDto registerDto) {
        return mapper.map(registerDto, User.class);
    }

    // private User mapToEntity(UserDto userDto) {
    // return mapper.map(userDto, User.class);
    // }

    @Override
    public UserDto createUser(RegisterDto registerDto) {
        var user = mapToEntity(registerDto);
        user.setRole(Role.USER);
        return mapToDto(userRepo.save(user));
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepo.findAll().stream().map(user -> mapToDto(user)).collect(Collectors.toList());
    }

    @Override
    public UserDto getUserByEmail(String email) {
        var user = userRepo.findById(email).orElseThrow(() -> new ResourceNotFoundException("User", "email", email));
        return mapToDto(user);
    }

    @Override
    public UserDto updateUser(String email, UserDto userDto) {
        var user = userRepo.findById(email).orElseThrow(() -> new ResourceNotFoundException("User", "email", email));
        user.setName(userDto.getName());
        user.setPassword(userDto.getPassword());
        return mapToDto(userRepo.save(user));
    }

    @Override
    public void deleteUser(String email) {
        var user = userRepo.findById(email).orElseThrow(() -> new ResourceNotFoundException("User", "email", email));
        userRepo.delete(user);
    }

}
