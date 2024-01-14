package com.learn.reviewgv.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.reviewgv.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Long> {

}
