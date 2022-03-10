package com.demovh.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demovh.dsmovie.dto.MovieDTO;
import com.demovh.dsmovie.entities.Movie;
import com.demovh.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;

	@Transactional(readOnly = true) // ESPECIFICAR PRO JPA QUE ESSE É UM MÉTODO DE TRANSAÇÃO
	public Page<MovieDTO> findAll(Pageable pageable){ // "Pageable" -> PARA NÃO REDENREZIAR TODOS OS OBJ DA LISTA RETORNADA DE UMA VEZ
		Page<Movie> result = repository.findAll(pageable);
		// Page<Movie> = PAGINA DE MOVIES
		
		Page<MovieDTO> page= result.map(x -> new MovieDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id){ // "Pageable" -> PARA NÃO REDENREZIAR TODOS OS OBJ DA LISTA RETORNADA DE UMA VEZ
		Movie movie = repository.findById(id).get();

		MovieDTO dto = new MovieDTO(movie);
		
		return dto;
	}
}
