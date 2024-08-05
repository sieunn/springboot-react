package com.kh.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import oracle.jdbc.proxy.annotation.Post;

@Mapper
public interface PostMapper {
	List <Post> findAll();
	void insertPost(Post post);
	void insertImage();
}
