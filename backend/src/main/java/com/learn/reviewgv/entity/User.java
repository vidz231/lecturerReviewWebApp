package com.learn.reviewgv.entity;

import java.util.HashSet;
import java.util.Set;
import com.learn.reviewgv.utils.AppConstants.Role;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    private String email;

    private String name;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    @Column(name = "total_upvote")
    private Long totalUpvote = (long) 0;
    @Column(name = "total_downvote")
    private Long totalDownvote = (long) 0;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Review> reviews = new HashSet<>();
}
