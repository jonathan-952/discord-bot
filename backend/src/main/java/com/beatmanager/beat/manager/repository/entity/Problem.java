package com.beatmanager.beat.manager.repository.entity;

import java.time.OffsetDateTime;



import jakarta.persistence.Column;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "problem")
public class Problem {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @Column(name = "problem_id", nullable = false, unique = false)
  private String problemID;

  @Column(nullable = true, unique = false)
  private String notes;

  @Column(nullable = false)
  private Integer rating;

  @Column(name = "last_submitted", nullable = false)
  private OffsetDateTime lastSubmitted;

  @Column(name = "user_id", nullable = false, unique = false)
  private String userID;


  @PrePersist
  public void prePersist() {
      lastSubmitted = OffsetDateTime.now(); // stores with offset
  }

  @PreUpdate
  public void preUpdate() {
      lastSubmitted = OffsetDateTime.now();
  }

protected Problem() {}

public Problem(Integer rating, String problemID, String notes, String userID) {
    this.problemID = problemID;
    this.notes = notes;
    this.userID = userID;
    this.rating = rating;
}

}