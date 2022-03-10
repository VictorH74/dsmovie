package com.demovh.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.demovh.dsmovie.dto.MovieDTO;
import com.demovh.dsmovie.dto.ScoreDTO;
import com.demovh.dsmovie.entities.Movie;
import com.demovh.dsmovie.entities.Score;
import com.demovh.dsmovie.entities.User;
import com.demovh.dsmovie.repositories.MovieRepository;
import com.demovh.dsmovie.repositories.ScoreRepository;
import com.demovh.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {
	
	@Autowired
	private MovieRepository MovieRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional // -> GARANTIR A TRANSAÇÃO COM O DATABASE
	public MovieDTO saveScore(ScoreDTO dto) {
		
		User user = userRepository.findByEmail(dto.getEmail());
		
		if(user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user); // -> USADO QUANDO O OBJ AINDA SERÁ USADO EM OPERAÇÕES NESSE MÉTODO
		}
		
		Movie movie = MovieRepository.findById(dto.getMovieId()).get();
		
		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());
		
		score = scoreRepository.saveAndFlush(score); // -> USADO Q... / RETORNA A REFERENCIA DO OBJ SALVO
		
		Double sum = 0.0;
		for (Score s: movie.getScores()) {
			sum += s.getValue();
		}
		Double avg = sum / movie.getScores().size();
		
		movie.setScore(avg);
		movie.setCount(movie.getScores().size());
		
		movie = MovieRepository.save(movie);
			
		return new MovieDTO(movie);
		
	}
	
}
