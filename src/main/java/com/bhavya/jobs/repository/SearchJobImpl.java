package com.bhavya.jobs.repository;

import com.bhavya.jobs.model.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class SearchJobImpl implements SearchJobRepo {
    @Autowired
    MongoClient client;

    @Autowired
    MongoConverter converter;

    @Override
    public List<Post> jobSearch(String texts) {

        List<Post> posts = new ArrayList<>();

        MongoDatabase database = client.getDatabase("jobsearchportal");
        MongoCollection<Document> collection = database.getCollection("posts");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
                new Document("text",
                        new Document("query", texts)
                                .append("path", Arrays.asList("techs", "profile", "desc", "locations"))))));
        result.forEach(document -> posts.add(converter.read(Post.class,document)));


        return posts;
    }
}
