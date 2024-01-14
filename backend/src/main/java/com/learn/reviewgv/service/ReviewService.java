package com.learn.reviewgv.service;

import java.util.List;

import com.learn.reviewgv.dto.ReviewDto;

public interface ReviewService {

    ReviewDto createReview(String lectureId, ReviewDto reviewDto);

    List<ReviewDto> getAllReviewByLecturerId(String lecturerId);

    ReviewDto getReviewByReviewId(Long id);

    ReviewDto getReviewByUserEmail(String email);

    ReviewDto updateReview(Long id, ReviewDto reviewDto);

    void deleteUser(Long id);

}
