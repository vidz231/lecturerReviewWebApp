package com.learn.reviewgv.dto;

import lombok.Data;

@Data
public class ReviewDto {

    private Long id;
    private String content;
    private int rate;
    private Long totalUpvote;
    private Long totalDownvote;

}
