package com.springsql.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springsql.beans.Detail;

@Repository
public interface DetailRepo extends JpaRepository<Detail, Long> {
    
}
