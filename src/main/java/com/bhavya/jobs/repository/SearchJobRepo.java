package com.bhavya.jobs.repository;

import com.bhavya.jobs.model.Post;

import java.util.List;

public interface SearchJobRepo {
    List<Post> jobSearch(String text);
}
