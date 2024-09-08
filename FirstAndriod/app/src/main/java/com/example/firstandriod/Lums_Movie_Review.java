package com.example.firstandriod;

import android.os.Bundle;

import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;

import android.widget.ListView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.RatingBar;
import android.widget.Switch;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import assignment.Emmylums.DatabaseAccessModeller;
import assignment.Emmylums.MovieModel;

public class Lums_Movie_Review extends AppCompatActivity {

    Button btnAdd, btnDeleteAll;
    EditText movieNameET, yearET, durationET;
    RatingBar ratingRBR;
    RadioButton pythonRB, reactRB;
    CheckBox mssqlCB, javaCB;
    ListView listView;
    RadioGroup gendergroupRG;
    MovieModel movieModel;
    ArrayAdapter memberArrayList;
    assignment.Emmylums.DatabaseAccessModeller databaseAccessModeller;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_lums_movie_review);

        btnAdd= findViewById(R.id.btnAdd);
        btnDeleteAll= findViewById(R.id.btnDeleteAll);
        movieNameET = findViewById(R.id.movieName);
        yearET = findViewById(R.id.year);
        durationET = findViewById(R.id.duration);
        ratingRBR = findViewById(R.id.ratingBar);
        pythonRB = findViewById(R.id.python);
        reactRB = findViewById(R.id.react);
        mssqlCB = findViewById(R.id.mssql);
        javaCB = findViewById(R.id.java);
        gendergroupRG = findViewById(R.id.gender);
        listView = findViewById(R.id.listView);

        databaseAccessModeller =
                new assignment.Emmylums.DatabaseAccessModeller(this);

        memberArrayList = new ArrayAdapter<MovieModel>(Lums_Movie_Review.this,android.R.layout.simple_list_item_1,
                databaseAccessModeller.getResultList());

        listView.setAdapter(memberArrayList);
        btnAdd.setOnClickListener(view ->{
            try{
                String movieName = movieNameET.getText().toString();
                int year = Integer.parseInt(yearET.getText().toString());
                float rating = ratingRBR.getRating();
                String duration = durationET.getText().toString();

                String python = pythonRB.isChecked()? "PYTHON": "";
                String react = reactRB.isChecked()? "REACT": "";
                String mssql = mssqlCB.isChecked() ? "MSSQL": "";
                String java = javaCB.isChecked() ? "Java": "";
                if (python.isEmpty() && react.isEmpty() && mssql.isEmpty() && java.isEmpty()){
                    throw new Exception();
                }

                String[] courseVideos = {python,react,mssql,java};

                int genderID = gendergroupRG.getCheckedRadioButtonId();
                RadioButton genderButton = findViewById(genderID);

                String gender = genderButton.getText().toString();

                movieModel = new MovieModel(
                        -1,
                        movieName,
                        year,
                        rating,
                        duration,
                        courseVideos,
                        gender
                );

                assignment.Emmylums.DatabaseAccessModeller databaseAccessModeller = new assignment.Emmylums.DatabaseAccessModeller(Lums_Movie_Review.this);

                boolean success = databaseAccessModeller.addOne(movieModel);

                Toast.makeText(Lums_Movie_Review.this, "Status = " + success, Toast.LENGTH_SHORT).show();
                memberArrayList = new ArrayAdapter<MovieModel>(Lums_Movie_Review.this, android.R.layout.simple_list_item_1,
                        databaseAccessModeller.getResultList());
                listView.setAdapter(memberArrayList);
            }catch (Exception e){
                Toast.makeText(Lums_Movie_Review.this, "Inputs Required", Toast.LENGTH_SHORT).show();
            }
        });

        btnDeleteAll.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view){
                databaseAccessModeller = new DatabaseAccessModeller(Lums_Movie_Review.this);

                boolean deleteSuccess = databaseAccessModeller.deleteAll();
                Toast.makeText(Lums_Movie_Review.this, "Status = " + deleteSuccess, Toast.LENGTH_SHORT).show();
                memberArrayList = new ArrayAdapter<MovieModel>(Lums_Movie_Review.this, android.R.layout.simple_list_item_1,
                        databaseAccessModeller.getResultList());
                listView.setAdapter(memberArrayList);
            }
        });

        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                MovieModel clickedMember = (MovieModel) adapterView.getItemAtPosition(i);
                databaseAccessModeller.deleteOne(clickedMember);
                memberArrayList = new ArrayAdapter<MovieModel>(Lums_Movie_Review.this, android.R.layout.simple_list_item_1,
                        databaseAccessModeller.getResultList());
                listView.setAdapter((memberArrayList));;
                Toast.makeText(Lums_Movie_Review.this, "Deleted " + clickedMember.toString(), Toast.LENGTH_SHORT).show();
            }
        });
    }
}