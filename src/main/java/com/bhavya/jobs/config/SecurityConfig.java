package com.bhavya.jobs.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers("/","/index.html","/index.js","/posts").permitAll();
                    auth.anyRequest().authenticated();
                })
                .oauth2Login(oauth2 ->
                        oauth2.defaultSuccessUrl("/admin_dashboard.html", true)
                )
                .build();
    }
}




