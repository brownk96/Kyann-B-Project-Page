package edu.simpson.brown;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by kyann.brown on 2/14/2017.
 */
public class NameListEdit extends HttpServlet {

    private Pattern firstNameValidationPattern;
    private Pattern lastNameValidationPattern;
    private Pattern emailValidationPattern;
    private Pattern phoneValidationPattern;
    private Pattern birthdayValidationPattern;

    public NameListEdit()
    {
        firstNameValidationPattern = Pattern.compile("^[A-Za-z]{1,20}$");
        lastNameValidationPattern = Pattern.compile("^[A-Za-z']{1,30}$");
        emailValidationPattern = Pattern.compile("^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
        phoneValidationPattern = Pattern.compile("\\d{3}-\\d{3}-\\d{4}$");
        birthdayValidationPattern =Pattern.compile("^(18|19|20)\\d{2}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$");
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        out.println("JSON Post is working");

        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String birthday = request.getParameter("birthday");

        String id = request.getParameter("id");
        out.println("This is the id gotten " + id);

        //matcher
        Matcher first = firstNameValidationPattern.matcher(firstName);
        Matcher last = lastNameValidationPattern.matcher(lastName);
        Matcher emailAddress = emailValidationPattern.matcher(email);
        Matcher phoneNumber = phoneValidationPattern.matcher(phone);
        Matcher birthdayDate = birthdayValidationPattern.matcher(birthday);

        if(first.find() && last.find() && emailAddress.find() && phoneNumber.find() && birthdayDate.find())
        {
            out.println("Passed validation");
            if(id == null) {
                PersonDAO.editPerson(firstName, lastName, email, phone, birthday);
                out.println("Insert record");
            }
            else {
                int idNum = Integer.parseInt(id);
                PersonDAO.updatePerson(idNum, firstName, lastName, email, phone, birthday);
                out.println("Update record");
            }

        }else {
            out.println("Did not pass validation");
        }
    }
}
