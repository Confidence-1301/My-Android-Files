package com.example.firstandriod;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class Next_Activity extends AppCompatActivity {
    SharedPreferences sp;
    TextView name,phone,email;
    Button logOut;
    Intent in;
    String nameStr,phoneStr, emailStr;

    public static final String  MyPREFERENCES = "MyPrefs";
    public static final  String Name="nameKey";
    public static  final  String Phone ="phoneKey";
    public static final String Email="emailKey";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_next);

        name=findViewById(R.id.name);
        phone=findViewById(R.id.phone);
        email=findViewById(R.id.email);
        logOut = findViewById(R.id.logOut);

        sp = getApplicationContext().getSharedPreferences(MyPREFERENCES, MODE_PRIVATE);

        nameStr = sp.getString(Name, "");
        phoneStr = sp.getString(Phone, "");
        emailStr = sp.getString(Email, "");


        name.setText(nameStr);
        phone.setText(phoneStr);
        email.setText(emailStr);


        Toast.makeText(this, "Login Successful", Toast.LENGTH_SHORT).show();

        logOut.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Next_Activity.this,MainActivity7.class);
                startActivity(in);
            }
        });
    }
}