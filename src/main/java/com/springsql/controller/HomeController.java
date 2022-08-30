package com.springsql.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.JSONObject;
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
        ModelAndView view  = new ModelAndView();
        view.setViewName("index");        
        
        return view;
    }
    @GetMapping("/getdata")
    public String ajaxController(){
        JSONObject json = new JSONObject();
        List<Detail> detail = detailRepo.findAll();
       json.put("data", detail);
        return json.toString();
    }
    
}
