package br.edu.univas.si.lab6.calculator.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.edu.univas.si.lab6.calculator.service.TempService;

public class TempController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Float celsius = Float.valueOf(request.getParameter("celsius"));
		
		Float tempIndex = TempService.getIndex(celsius);
		
		response.getWriter().append(tempIndex.toString());
	}

}
