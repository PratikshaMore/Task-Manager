package com.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class HelloWorldController {
	
	@GetMapping( path="/hello-world")
	public String hellowWorld() {
		return "Hello World";
	}
	
	@GetMapping( path="/hello-world-bean")
	public HellowWorldBean hellowWorldBean() {
		//throw new RuntimeException("some error has happened!");
		return new HellowWorldBean("Hello World Changed");
	}
	
	@GetMapping( path="/hello-world/path-variable/{name}")
	public HellowWorldBean hellowWorldPathVariable(@PathVariable String name) {
		return new HellowWorldBean(String.format("Hello World , %s", name));
	}

	
}
