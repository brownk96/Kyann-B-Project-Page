package edu.simpson.brown;

/**
 * Created by kyann.brown on 3/23/2017
 */
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "SetSessionServlet")
public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        PrintWriter out = response.getWriter();

        //String sessionKey = request.getParameter("sessionKey");
        String sessionValue = request.getParameter("sessionValue");

        HttpSession session = request.getSession();
        //session.setAttribute(sessionKey, sessionValue);
        session.setAttribute("loginID", sessionValue);

        out.println("Done setting the login variable");
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
