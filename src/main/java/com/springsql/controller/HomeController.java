package com.springsql.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.springsql.beans.Detail;
import com.springsql.repo.DetailRepo;

@RestController
public class HomeController {
    @Autowired
    private DetailRepo detailRepo;
    
    @GetMapping("/")
    public ModelAndView home(Detail detail){
        
        detail.setName("Sahil");
        detail.setEmail("Sahil222@gmail.com");
        detail.setPassword("777");
        detailRepo.save(detail);
        ModelAndView view  = new ModelAndView();
        view.setViewName("index");        
        
        return view;
    }
    @GetMapping("/getdata")
    public List<Detail> ajaxController(){
        List<Detail> detail = detailRepo.findAll();
        
        return detail;
    }
    
}
