package com.learn.reviewgv.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.learn.reviewgv.dto.LecturerDto;
import com.learn.reviewgv.entity.Lecturer;
import com.learn.reviewgv.exception.ResourceNotFoundException;
import com.learn.reviewgv.repository.LecturerRepository;
import com.learn.reviewgv.service.LecturerService;

@Service
public class LecturerServiceImpl implements LecturerService {

    private LecturerRepository lecturerRepo;
    private ModelMapper mapper;

    public LecturerServiceImpl(LecturerRepository lecturerRepo, ModelMapper mapper) {
        this.lecturerRepo = lecturerRepo;
        this.mapper = mapper;
    }

    private LecturerDto mapToDto(Lecturer lecturer) {
        return mapper.map(lecturer, LecturerDto.class);
    }

    private Lecturer mapToEntity(LecturerDto lecturerDto) {
        return mapper.map(lecturerDto, Lecturer.class);
    }

    @Override
    public LecturerDto createLecturer(LecturerDto lecturerDto) {
        var lecturer = mapToEntity(lecturerDto);
        return mapToDto(lecturerRepo.save(lecturer));
    }

    @Override
    public List<LecturerDto> getAllLecturers() {
        return lecturerRepo.findAll().stream().map(lecturer -> mapToDto(lecturer)).collect(Collectors.toList());
    }

    @Override
    public LecturerDto getLecturerById(String id) {
        var lecturer = lecturerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("lecturer", "id", id));
        return mapToDto(lecturer);
    }

    @Override
    public LecturerDto updateLecturer(String id, LecturerDto lecturerDto) {
        var lecturer = lecturerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("lecturer", "id", id));
        lecturer.setName(lecturerDto.getName());
        lecturer.setImage(lecturerDto.getImage());
        lecturer.setMajor(lecturerDto.getMajor());
        return mapToDto(lecturerRepo.save(lecturer));
    }

    @Override
    public void deleteLecturer(String id) {
        var lecturer = lecturerRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("lecturer", "id", id));
        lecturerRepo.delete(lecturer);
    }

}
