package com.learn.reviewgv.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.reviewgv.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

}
