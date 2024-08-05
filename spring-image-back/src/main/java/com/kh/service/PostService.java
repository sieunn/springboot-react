package com.kh.service;

import java.util.List;

import oracle.jdbc.proxy.annotation.Post;


public interface PostService {
	List <Post> findAll();
	void insertPost(Post post);
	void insertImage();
}
