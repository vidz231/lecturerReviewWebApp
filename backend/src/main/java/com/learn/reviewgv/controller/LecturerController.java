package com.learn.reviewgv.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.learn.reviewgv.dto.LecturerDto;
import com.learn.reviewgv.service.LecturerService;

@RestController()
@RequestMapping("/lecturer")
public class LecturerController {
    private LecturerService lecturerService;

    public LecturerController(LecturerService LecturerService) {
        this.lecturerService = LecturerService;
    }

    @PostMapping()
    public ResponseEntity<LecturerDto> createLecturer(@RequestBody LecturerDto lecturerDto) {
        return new ResponseEntity<>(lecturerService.createLecturer(lecturerDto), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<List<LecturerDto>> getAllLecturers() {
        return ResponseEntity.ok(lecturerService.getAllLecturers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LecturerDto> getLecturerByEmail(@PathVariable String id) {
        return ResponseEntity.ok(lecturerService.getLecturerById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LecturerDto> putMethodName(@PathVariable String id, @RequestBody LecturerDto LecturerDto) {
        return ResponseEntity.ok(lecturerService.updateLecturer(id, LecturerDto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteLecturer(@PathVariable String id) {
        lecturerService.deleteLecturer(id);
        return ResponseEntity.ok("Delete success!!!");
    }
}
