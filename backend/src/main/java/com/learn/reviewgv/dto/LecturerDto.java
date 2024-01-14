package com.learn.reviewgv.dto;

import com.learn.reviewgv.utils.AppConstants.Site;

import lombok.Data;

@Data
public class LecturerDto {

    private String id;

    private String name;

    private String image;

    private String major;

    private Site site;
}
