package com.bhavya.jobs.controller;

import com.bhavya.jobs.model.Post;
import com.bhavya.jobs.repository.PostRepo;
import com.bhavya.jobs.repository.SearchJobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
@CrossOrigin
public class PostController {
    @Autowired
    PostRepo postRepo;
    @Autowired
    SearchJobRepo searchRepo;

    @GetMapping()
    public List<Post> getAllPosts() {
        List<Post> posts = postRepo.findAll();
        for(Post x:posts) {
            System.out.println(x.toString());
        }
        return posts;
    }

    @GetMapping("/{text}")
    public List<Post> searchPostByText(@PathVariable String text) {
        return searchRepo.jobSearch(text);
    }

    @PostMapping()
    public Post createPost(@RequestBody Post post) {

        Post postx =  postRepo.save(post);
        System.out.println("saved " + postx.get_id());
        return postx;
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable String id) {
        System.out.println("Wants to delete: " + id);
        postRepo.deleteById(id);
    }

    @GetMapping("/admin-dashboard")
    public String getAdminDashboard() {
        return "admin_dashboard.html";
    }
}
