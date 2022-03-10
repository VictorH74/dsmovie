package com.demovh.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demovh.dsmovie.entities.Score;
import com.demovh.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
