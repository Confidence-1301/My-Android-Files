package com.example.firstandriod;

import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;


public class Shared_Preference_demo extends AppCompatActivity {
    EditText jsf, hibernate, spring, android, junit;
    Button savePreference, viewPreference;
    String jsfStr, hibernateStr, springStr, androidStr, junitStr;

    SharedPreferences sp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shared_preference_demo);

        jsf = findViewById(R.id.jsf);
        hibernate = findViewById(R.id.hibernate);
        spring = findViewById(R.id.spring);
        android = findViewById(R.id.android);
        junit = findViewById(R.id.junit);

        savePreference = findViewById(R.id.savePreferences);

        viewPreference = findViewById(R.id.viewPreferences);

        savePreference.setOnClickListener(view -> {
            jsfStr = jsf.getText().toString();
            hibernateStr = hibernate.getText().toString();
            androidStr = android.getText().toString();
            springStr = spring.getText().toString();
            junitStr = junit.getText().toString();

            sp = getSharedPreferences("CoursePref", MODE_PRIVATE);

            SharedPreferences.Editor editor = sp.edit();

            editor.putString("jsfStr", jsfStr);
            editor.putString("hibernateStr", hibernateStr);
            editor.putString("springStr", springStr);
            editor.putString("androidStr", androidStr);
            editor.putString("junitStr", junitStr);

            editor.apply();

            Toast.makeText(Shared_Preference_demo.this, "Preference Saved Successfully", Toast.LENGTH_SHORT).show();
        });

        viewPreference.setOnClickListener(view -> {
            Intent viewPrefIntent = new Intent(Shared_Preference_demo.this, ViewPref.class);
            startActivity(viewPrefIntent);
        });
    }
}