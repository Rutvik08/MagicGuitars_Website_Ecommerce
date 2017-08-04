/*
	Name: Desai, Rutvik
	Class Account#: jadrn010
	Project #2
*/

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import sdsu.*;

public class Login extends HttpServlet { 
          
    public void doPost(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  {
        processLoginRequest(request, response);         
        }

    public void doGet(HttpServletRequest request,
              HttpServletResponse response)
                        throws IOException, ServletException  { 
        throw new ServletException("GET protocol is not supported, POST only");
        } 
        
    private void processLoginRequest(HttpServletRequest request,
              HttpServletResponse response) 
                        throws IOException, ServletException {
        String toDo= "";
        if(!request.getMethod().equals("POST")) {
            response.sendRedirect("/WEB-INF/jsp/login.jsp"); 
            return;
            }     
        String username = (String) request.getParameter("user");
        String password = (String) request.getParameter("password");
        if(username == null || password == null) {
            response.sendRedirect("/WEB-INF/jsp/login.jsp"); 
            return;
            }        
        if(PasswordUtilities.isValidLogin(username,password)) {
            toDo = "/WEB-INF/jsp/main.jsp";
            HttpSession session = request.getSession(true);
            session.setAttribute("username", username);                     
            RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo); 
            dispatcher.forward(request, response);  
        }else{
	toDo = "/WEB-INF/jsp/login.jsp";
        RequestDispatcher dispatcher = request.getServletContext().getRequestDispatcher(toDo);
        dispatcher.forward(request, response);
	}
    }      
}



