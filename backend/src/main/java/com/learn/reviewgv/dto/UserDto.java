package com.learn.reviewgv.dto;

import lombok.Data;

@Data
public class UserDto {

    private String name;

    private String email;

    private String password;

    private Long totalDownvote;

    private Long totalUpvote;
}
