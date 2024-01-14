package com.learn.reviewgv.service;

import java.util.List;

import com.learn.reviewgv.dto.LecturerDto;

public interface LecturerService {

    LecturerDto createLecturer(LecturerDto lecturerDto);

    List<LecturerDto> getAllLecturers();

    LecturerDto getLecturerById(String id);

    LecturerDto updateLecturer(String id, LecturerDto lecturerDto);

    void deleteLecturer(String id);

}