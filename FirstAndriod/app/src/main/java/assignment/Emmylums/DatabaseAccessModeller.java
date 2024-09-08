package assignment.Emmylums;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DatabaseAccessModeller extends SQLiteOpenHelper {
    public static final String MOVIENAME = "MOVIENAME";
    public static final String YEAR = "YEAR";
    public static final String RATING = "RATING";
    public static final String DURATION = "DURATION";
    public static final String MOVIE = "MOVIE";
    public static final String COURSE_VIDEOS = "COURSE_VIDEOS";
    public static final String GENDER = "GENDER";
    public static final String ID = "ID";

    public DatabaseAccessModeller(@Nullable Context theMainActivityClass){
        super(theMainActivityClass, "lums.db", null, 1);
    }

    @Override
    public void onCreate(SQLiteDatabase lumsAssignment_db){
        String createTable = "CREATE TABLE " + MOVIE +
                " (" +
                ID +
                " INTEGER PRIMARY KEY AUTOINCREMENT, " +
                MOVIENAME +
                " TEXT, " +
                YEAR +
                " INT, " +
                RATING +
                " FLOAT, " +
                DURATION +
                " INT, " +
                COURSE_VIDEOS +
                " TEXT, " +
                GENDER +
                " TEXT)"
                ;

        lumsAssignment_db.execSQL(createTable);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int oldVersion, int newVersion){

    }

    public boolean addOne(MovieModel movieModel){
        SQLiteDatabase db = this.getWritableDatabase();

        ContentValues cv = new ContentValues();
        cv.put(MOVIENAME, movieModel.getMovieName());
        cv.put(YEAR, movieModel.getYear());
        cv.put(RATING, movieModel.getRating());
        cv.put(DURATION, movieModel.getDuration());
        String courseVideos="";

        for (int i=0; i<movieModel.getCourseVideos().length; i++){
            if(movieModel.getCourseVideos()[i].isEmpty()){
                courseVideos = courseVideos.concat("");
            }
            else{
            courseVideos = courseVideos.concat(String.format("%s,",movieModel.getCourseVideos()[i]));
            }
        }
        cv.put(COURSE_VIDEOS, courseVideos);
        cv.put(GENDER, movieModel.getGender());

//        db.insert(MEMBER, null, cv);
        long insert = db.insert(MOVIE, null,cv);
        return insert != -1;
    }

    public List<MovieModel> getResultList(){
        List<MovieModel> resultset = new ArrayList<>();

        String queryAll = "SELECT * FROM " + MOVIE;

        SQLiteDatabase db = this.getReadableDatabase();

        Cursor cursor = db.rawQuery(queryAll, null);

        if(cursor.moveToFirst()){
            do{
                int movieID = cursor.getInt(0);
                String movieName = cursor.getString(1);
                int year = cursor.getInt(2);
                float rating = cursor.getInt(3);
                String duration = cursor.getString(4);
                String courseVideosSTRING = cursor.getString(5);
                String gender = cursor.getString(6);

                String[] courseVideos = courseVideosSTRING.split(",");

                MovieModel movieModel = new MovieModel(movieID, movieName, year, rating, duration, courseVideos, gender);
                resultset.add(movieModel);
            }while(cursor.moveToNext());
        }

        cursor.close();
        db.close();
        return resultset;
    }

    public boolean deleteOne(MovieModel movieModel){

        SQLiteDatabase db = this.getWritableDatabase();
        String queryString = "DELETE FROM " + MOVIE + "WHERE" + ID + " = " + movieModel.getId();

        Cursor cursor = db.rawQuery(queryString, null);
        return cursor.moveToFirst();
    }

    public boolean deleteAll(){

        SQLiteDatabase db = this.getWritableDatabase();
        String queryString = "DELETE FROM " + MOVIE;

//        db.execSQL(queryString, null);
        db.execSQL(queryString);
//        db.close();
        return true;
    }
}