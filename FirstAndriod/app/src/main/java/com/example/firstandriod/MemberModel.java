package com.example.firstandriod;

public class MemberModel {
    private int id;
    private String firstName, surName;
    private int age;
    private boolean isActive;

    public MemberModel(int id, String firstName, String surName, int age, boolean isActive) {
        this.id = id;
        this.firstName = firstName;
        this.surName = surName;
        this.age = age;
        this.isActive = isActive;
    }

    public MemberModel(){
    }

    @Override
    public String toString(){
//      return "Firstname:" + firstName;
        return "MemberModel{ " +
                "id= " + id +
                ", studentName=' " + firstName + '\'' +
                ", surName' " + surName + '\'' +
                ", age= " + age +
                ", isActive= " + isActive +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName = firstName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public String getSurName() {
        return surName;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public boolean isActive(){
        return isActive;
    }
}
