package com.example.firstandriod;

import android.os.Bundle;

import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;

import android.widget.ListView;
import android.widget.Switch;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity3 extends AppCompatActivity {

    Button btnAdd, btnDeleteAll;
    EditText firstName;
    EditText surName;
    EditText age;
    Switch activeMember;
    ListView listView;
    MemberModel memberModel;
    ArrayAdapter memberArrayList;
    DatabaseAccessModeller databaseAccessModeller;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3);

      btnAdd= findViewById(R.id.btnAdd);
      btnDeleteAll= findViewById(R.id.btnDeleteAll);
      firstName = findViewById(R.id.firstName);
      surName = findViewById(R.id.surName);
      age = findViewById(R.id.age);
      activeMember = findViewById(R.id.activeMember);
      listView = findViewById(R.id.listView);

      databaseAccessModeller =
              new DatabaseAccessModeller(this);

      memberArrayList =
              new ArrayAdapter<MemberModel>
                      (MainActivity3.this,
                              android.R.layout.simple_list_item_1,
                              databaseAccessModeller.getResultList());

      listView.setAdapter(memberArrayList);
      btnAdd.setOnClickListener(view ->{
          try{
              memberModel = new MemberModel(
                        -1,
                        firstName.getText().toString(),
                        surName.getText().toString(),
                        Integer.parseInt(age.getText().toString()),
                        activeMember.isChecked()
              );

              DatabaseAccessModeller databaseAccessModeller = new DatabaseAccessModeller(MainActivity3.this);

              boolean success = databaseAccessModeller.addOne(memberModel);

              Toast.makeText(MainActivity3.this, "Status = " + success, Toast.LENGTH_SHORT).show();
              memberArrayList = new ArrayAdapter<MemberModel>(MainActivity3.this, android.R.layout.simple_list_item_1,
                      databaseAccessModeller.getResultList());

              listView.setAdapter(memberArrayList);
          }catch (Exception e){
              Toast.makeText(MainActivity3.this, "Inputs Required", Toast.LENGTH_SHORT).show();
          }
      });

      btnDeleteAll.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view){
            databaseAccessModeller = new DatabaseAccessModeller(MainActivity3.this);

            boolean deleteSuccess = databaseAccessModeller.deleteAll(memberModel);
            Toast.makeText(MainActivity3.this, "Status = " + deleteSuccess, Toast.LENGTH_SHORT).show();
            memberArrayList = new ArrayAdapter<MemberModel>(MainActivity3.this, android.R.layout.simple_list_item_1,
                    databaseAccessModeller.getResultList());
            listView.setAdapter(memberArrayList);
        }
      });

      listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
          @Override
          public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
              MemberModel clickedMember = (MemberModel) adapterView.getItemAtPosition(i);
              databaseAccessModeller.deleteOne(clickedMember);
              memberArrayList = new ArrayAdapter<MemberModel>(MainActivity3.this, android.R.layout.simple_list_item_1,
                      databaseAccessModeller.getResultList());
              listView.setAdapter((memberArrayList));;
              Toast.makeText(MainActivity3.this, "Deleted " + clickedMember.toString(), Toast.LENGTH_SHORT).show();
          }
      });
    }
}