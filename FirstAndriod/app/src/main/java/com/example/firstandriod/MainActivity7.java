package com.example.firstandriod;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;


public class MainActivity7 extends AppCompatActivity{
    EditText ed1,ed2,ed3;
    Button b1;
    Intent in;

    public static final String  MyPREFERENCES = "MyPrefs";
    public static final  String Name="nameKey";
    public static  final  String Phone ="phoneKey";
    public static final String Email="emailKey";
    SharedPreferences sharedPreferences;

    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main7);

        ed1=(EditText)findViewById(R.id.editText);
        ed2=(EditText)findViewById(R.id.editText2);
        ed3=(EditText)findViewById(R.id.editText3);

        b1=(Button)findViewById(R.id.button);
        sharedPreferences = getSharedPreferences(MyPREFERENCES, MODE_PRIVATE);

        b1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                String nameStr = ed1.getText().toString();
                String phoneStr = ed2.getText().toString();
                String emailStr = ed3.getText().toString();

                SharedPreferences.Editor editor = sharedPreferences.edit();

                editor.putString(Name, nameStr);
                editor.putString(Phone, phoneStr);
                editor.putString(Email, emailStr);
                editor.apply();

                in = new Intent(MainActivity7.this,Next_Activity.class);
                startActivity(in);
            }
        });

    }
}



