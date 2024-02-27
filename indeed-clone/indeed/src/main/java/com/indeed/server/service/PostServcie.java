package com.indeed.server.service;

import java.util.List;

import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;

public interface PostServcie {

	public PostModel savePost(PostDTO postDTO); 
	
	public List<PostModel> getAllPosts();
}
