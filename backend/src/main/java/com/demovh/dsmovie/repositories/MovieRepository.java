package com.demovh.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demovh.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
