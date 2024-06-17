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

///////////////////////////////////////////////////////DataTables Valid Post just change Beans/Entity //////////////////////////////////////////////////
    // @PostMapping("/save-user")
    // public Map<String, List<UserDetails>> saveUser(@RequestBody String requestData)
    //         throws JsonMappingException, JsonProcessingException {
    //     List<UserDetails> userDetails = new ArrayList<>();
    //     ObjectMapper objectMapper = new ObjectMapper();

    //     Map<String, Object> map = objectMapper.readValue(requestData, Map.class);

    //     String action = (String) map.get("action");
    //     System.out.println("Action: " + action);

    //     Map<String, Object> data = (Map<String, Object>) map.get("data");
    //     data.forEach((key, value) -> {
    //         UserDetails details = objectMapper.convertValue(value, UserDetails.class);
    //         long keyId = Integer.parseInt(key);
    //         switch (action) {
    //             case "create":
    //                 UserDetails save = repo.save(details);
    //                 userDetails.add(save);

    //                 break;
    //             case "edit":
    //                 if (details.getFirstName() == null) {
    //                     UserDetails findByIdUser = repo.findById(keyId).get();
    //                     findByIdUser.setPassword(details.getPassword());
    //                     userDetails.add(findByIdUser);
    //                 } else {
    //                     details.setId(keyId);
    //                     userDetails.add(details);
    //                 }

    //                 break;
    //             case "remove":

    //                 break;

    //             default:
    //                 break;
    //         }

    //     });
    //     return Map.of("data", userDetails);
    // }
    
}
