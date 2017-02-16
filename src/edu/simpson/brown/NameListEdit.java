package edu.simpson.brown;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.ResultSet;

import java.util.logging.Level;
import java.util.logging.Logger;



/**
 * Created by kyann.brown on 2/14/2017.
 */
public class NameListEdit extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        out.println("JSON Post is working");

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");


        Logger log = Logger.getLogger(DBHelper.class.getName());

        out.println(firstName);
        out.println(lastName);
        out.println(email);
        out.println(phone);
        out.println(birthday);

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
}
