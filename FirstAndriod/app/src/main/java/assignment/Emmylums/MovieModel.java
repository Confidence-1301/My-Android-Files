package assignment.Emmylums;

public class MovieModel {
    private int id;
    private String movieName;
    private int year;
    private float rating;
    private String duration;
    private String[] courseVideos;
    private String gender;

    public MovieModel(int id, String movieName, int year, float rating, String duration, String[] courseVideos, String gender){
        this.id = id;
        this.movieName = movieName;
        this.year = year;
        this.rating = rating;
        this.duration = duration;
        this.courseVideos = courseVideos;
        this.gender = gender;
    }

    public MovieModel(){

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public float getRating() {
        return rating;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String[] getCourseVideos() {
        return courseVideos;
    }

    public void setCourseVideos(String[] courseVideos) {
        this.courseVideos = courseVideos;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString(){
        String courses="(";
        for (int i=0; i<getCourseVideos().length; i++){
            if(getCourseVideos()[i].isEmpty()){
                courses = courses.concat("");
            }else{
                courses = courses.concat(String.format("%s, ",getCourseVideos()[i]));
            }
        }

        courses = courses.concat(")");
        return "MemberModel{ " +
                "id= '" + id + "'" +
                ", movieName= '" + movieName + "'" +
                ", year= '" + year + "'" +
                ", rating= '" + rating + "'" +
                ", duration= '" + duration + "'" +
                ", courses= '" + String.format("%s",courses) + "'" +
                ", gender= '" + gender + "'" +
                '}';
    }
}
