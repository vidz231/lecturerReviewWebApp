package com.learn.reviewgv.entity;

import java.util.HashSet;
import java.util.Set;

import com.learn.reviewgv.utils.AppConstants.Site;

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
@Table(name = "lecturers")
public class Lecturer {
    @Id
    private String id;

    private String name;

    private String image = "";

    private String major;

    @Enumerated(EnumType.STRING)
    private Site site;

    @Column(name = "total_1_vote")
    private Long total1Vote = (long) 0;
    @Column(name = "total_2_vote")
    private Long total2Vote = (long) 0;
    @Column(name = "total_3_vote")
    private Long total3Vote = (long) 0;
    @Column(name = "total_4_vote")
    private Long total4Vote = (long) 0;
    @Column(name = "total_5_vote")
    private Long total5Vote = (long) 0;

    @OneToMany(mappedBy = "lecturer", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Review> reviews = new HashSet<>();

}
