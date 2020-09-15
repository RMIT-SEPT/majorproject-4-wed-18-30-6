package com.group6.userservice;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.concurrent.ExecutionException;
import com.group6.userservice.controller.BookingController;
import com.group6.userservice.controller.UserController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserserviceApplicationTests {
	@Autowired
	private UserController controller;
	@Autowired
	private BookingController controller2;

	@Test
	void contextLoads() throws Exception {
		assertNotNull(controller);
		assertNotNull(controller2);
	}

	@Test
	void shouldReturnGreeting() throws Exception {
		when(controller.hello()).thenReturn("hello");
	}

	@Test
	public void testSuccessLogin() throws InterruptedException, ExecutionException {
		String body = this.controller.loginEndpoint("uniformities", "1234");
		assertNotNull(body);;
	}
	@Test
	void testFailLogin() throws InterruptedException, ExecutionException {
		Assertions.assertEquals(controller.loginEndpoint("uniformities", "123"), true, "Wrong username/password");
	}


}
