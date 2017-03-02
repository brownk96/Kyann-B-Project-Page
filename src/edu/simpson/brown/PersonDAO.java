package edu.simpson.brown;

/**
 * Created by kyann.brown on 1/26/2017.
 */
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class PersonDAO
{
    public static List<Person> getPeople()
    {
        Logger log = Logger.getLogger(DBHelper.class.getName());

        log.log(Level.FINE, "Get people");

        List<Person> list = new LinkedList<Person>();

        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            conn = DBHelper.getConnection();

            String sql = "select id, first, last, email, phone, birthday from person";

            stmt = conn.prepareStatement(sql);

            rs = stmt.executeQuery();

            while(rs.next()) {
                Person person = new Person();

                person.setId(rs.getInt("id"));
                person.setFirst(rs.getString("first"));
                person.setLast(rs.getString("last"));
                person.setEmail(rs.getString("email"));
                person.setPhone(rs.getString("phone"));
                person.setBirthday(rs.getString("birthday"));

                list.add(person);
            }
        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            // Ok, close our result set, statement, and connection
            try { rs.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
        // Done! Return the results
        return list;
    }

    public static void editPerson(String firstName, String lastName, String email, String phone, String birthday)
    {
        Logger log = Logger.getLogger(DBHelper.class.getName());

        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try
        {
            conn = DBHelper.getConnection();

            String sql = "INSERT INTO person (first, last, email, phone, birthday) VALUES(?, ?, ?, ?, ?);";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, firstName);
            stmt.setString(2, lastName);
            stmt.setString(3, email);
            stmt.setString(4, phone);
            stmt.setString(5, birthday);

            stmt.executeUpdate();
        }
        catch(SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se );
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e );
        } finally {
            try { stmt.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
            try { conn.close(); } catch (Exception e) { log.log(Level.SEVERE, "Error", e ); }
        }
    }

    public static void deletePerson (int id) {
        Logger log = Logger.getLogger(DBHelper.class.getName());

        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        try {
            conn = DBHelper.getConnection();

            String sql = "DELETE FROM person WHERE id = ;";

            stmt = conn.prepareStatement(sql);

            stmt.setString(1, id);

            stmt.executeUpdate();

        } catch (SQLException se) {
            log.log(Level.SEVERE, "SQL Error", se);
        } catch (Exception e) {
            log.log(Level.SEVERE, "Error", e);
        } finally {
            try {stmt.close();} catch (Exception e) {log.log(Level.SEVERE, "Error", e);}
            try {conn.close();} catch (Exception e) {log.log(Level.SEVERE, "Error", e);}
        }
    }
}
