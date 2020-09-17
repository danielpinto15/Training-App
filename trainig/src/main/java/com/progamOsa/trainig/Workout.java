package com.progamOsa.trainig;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String skill;
    private String strength;
    private String wod;
    private String oddObjects;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getStrength() {
        return strength;
    }

    public void setStrength(String strength) {
        this.strength = strength;
    }

    public String getWod() {
        return wod;
    }

    public void setWod(String wod) {
        this.wod = wod;
    }

    public String getOddObjects() {
        return oddObjects;
    }

    public void setOddObjects(String oddObjects) {
        this.oddObjects = oddObjects;
    }
}
