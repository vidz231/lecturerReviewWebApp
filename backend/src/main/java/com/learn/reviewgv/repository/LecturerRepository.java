package com.learn.reviewgv.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.reviewgv.entity.Lecturer;

public interface LecturerRepository extends JpaRepository<Lecturer, String> {

}
