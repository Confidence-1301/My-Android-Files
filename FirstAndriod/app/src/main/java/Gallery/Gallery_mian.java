package Gallery;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import androidx.appcompat.app.AppCompatActivity;

import com.example.firstandriod.R;

public class Gallery_mian extends AppCompatActivity {
    Button page1, page2, page3, page4, page5, page6, page7;
    Intent in;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_gallery_mian);

        page1 = findViewById(R.id.page1);
        page2 = findViewById(R.id.page2);
        page3 = findViewById(R.id.page3);
        page4 = findViewById(R.id.page4);
        page5 = findViewById(R.id.page5);
        page6 = findViewById(R.id.page6);
        page7 = findViewById(R.id.page7);

        page1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery2.class);
                startActivity(in);
            }
        });
        page2.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery3.class);
                startActivity(in);
            }
        });
        page3.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery4.class);
                startActivity(in);
            }
        });
        page4.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery5.class);
                startActivity(in);
            }
        });
        page5.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery6.class);
                startActivity(in);
            }
        });
        page6.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery7.class);
                startActivity(in);
            }
        });
        page7.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                in = new Intent(Gallery_mian.this, Gallery8.class);
                startActivity(in);
            }
        });
    }
}