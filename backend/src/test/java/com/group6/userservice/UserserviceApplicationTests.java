package com.group6.userservice;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.when;

import java.util.concurrent.ExecutionException;
import com.group6.userservice.controller.BookingController;
import com.group6.userservice.controller.UserController;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserserviceApplicationTests {
	@Autowired
	private UserController controller;
	@Mock
	private UserController mockController;
	@Mock
	private BookingController mockController2;

	@Test
	void contextLoads() throws Exception {
		assertNotNull(mockController);
		assertNotNull(mockController2);
	}

	@Test
	void shouldReturnGreeting() throws Exception {
		when(mockController.hello()).thenReturn("hello");
	}

	@Test
	public void testSuccessLogin() throws InterruptedException, ExecutionException {
		String body = this.controller.loginEndpoint("uniformities", "1234");
		assertNotNull(body);
	}
	@Test
	void testFailLogin() throws InterruptedException, ExecutionException {
		Assertions.assertEquals(controller.loginEndpoint("uniformities", "123"), "Wrong username/password", "fail");
	}


}
