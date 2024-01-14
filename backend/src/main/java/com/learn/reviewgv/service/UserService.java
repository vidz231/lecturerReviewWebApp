package com.learn.reviewgv.service;

import java.util.List;

import com.learn.reviewgv.dto.RegisterDto;
import com.learn.reviewgv.dto.UserDto;

public interface UserService {

    UserDto createUser(RegisterDto registerDto);

    List<UserDto> getAllUsers();

    UserDto getUserByEmail(String email);

    UserDto updateUser(String email, UserDto userDto);

    void deleteUser(String email);

}
