package com.bhavya.jobs.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;
import java.util.Date;

@Document(collection = "posts")
public class Post {
    @Id
    private String _id;
    private String profile;
    private String desc;
    private int exp;
    private String[] techs;
    private String[] locations;
    private Date postedDate;
    private int noOfOpenings;
    private String contactEmail;

    public Post() {
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public String[] getTechs() {
        return techs;
    }

    public void setTechs(String[] techs) {
        this.techs = techs;
    }



    public Date getPostedDate() {
        return postedDate;
    }

    public void setPostedDate(Date postedDate) {
        this.postedDate = postedDate;
    }

    public int getNoOfOpenings() {
        return noOfOpenings;
    }

    public void setNoOfOpenings(int noOfOpenings) {
        this.noOfOpenings = noOfOpenings;
    }

    public String getContactEmail() {
        return contactEmail;
    }

    public void setContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
    }

    public String[] getLocations() {
        return locations;
    }

    public void setLocations(String[] locations) {
        this.locations = locations;
    }

    @Override
    public String toString() {
        return "Post{" +
                "_id='" + _id + '\'' +
                ", profile='" + profile + '\'' +
                ", desc='" + desc + '\'' +
                ", exp=" + exp +
                ", techs=" + Arrays.toString(techs) +
                ", locations=" + Arrays.toString(locations) +
                ", postedDate=" + postedDate +
                ", noOfOpenings=" + noOfOpenings +
                ", contactEmail='" + contactEmail + '\'' +
                '}';
    }
}
