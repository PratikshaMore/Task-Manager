package com.rest.webservices.restfulwebservices.helloworld;

public class HellowWorldBean {

	private String message;
	
	public  HellowWorldBean(String message) {
		// TODO Auto-generated method stub
		
		this.message = message;
		
	}
	
	public void setMessage(String message) {
		this.message = message;
	}
	
	public String getMessage() {
		return message;
	}
	
	@Override
	public String toString() {
		return "HellowWorldBean [message=" + message + "]";
	}
	
}
