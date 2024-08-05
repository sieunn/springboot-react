package com.kh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.mapper.PostMapper;

import oracle.jdbc.proxy.annotation.Post;

@Service
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostMapper postMapper;
	
	@Override
	public List<Post> findAll() {
		return null;
	}
	
	@Override
	public void insertPost(Post post) {
		
	} 
	
	@Override
	public void insertImage() {
		
	}
	

}
