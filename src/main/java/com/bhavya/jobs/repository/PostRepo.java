package com.bhavya.jobs.repository;

import com.bhavya.jobs.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<Post, String> {
}
