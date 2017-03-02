package edu.simpson.brown;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by kyann.brown on 3/2/2017.
 */
@WebServlet(name = "NameListDelete")
public class NameListDelete extends HttpServlet {

    private Pattern idValidation;

    public NameListDelete()
    {
        idValidation = Pattern.compile("\\d");
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        int id
        PersonDAO.deletePerson(id);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
