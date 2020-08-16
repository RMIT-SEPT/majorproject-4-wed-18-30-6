package JUnitTestAuth;

import java.util.concurrent.ExecutionException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import com.group6.userservice.service.AuthService;


@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class AuthServiceTest {
	
	private AuthService authService;
	private final String defaultErrMessage = "Wrong username/password";
	
	@BeforeAll
	public void setup() {
		authService = new AuthService();
	}
	
	@Test
	public void login_TimeStampString_CorrectEntry() throws ExecutionException, InterruptedException {
		Assertions.assertEquals(!authService.login("uniformities", "1234").equals(defaultErrMessage), true, "Correct Input Test Fail");
	}
	
	@Test
	public void login_DefaultErrMessage_nullEntry() throws ExecutionException, InterruptedException {
		Assertions.assertEquals(authService.login(null, "1234").equals(defaultErrMessage), true, "null Entry Test Fail");
	}
	
	@Test
	public void login_DefaultErrMessage_wrongPassword() throws ExecutionException, InterruptedException {
		Assertions.assertEquals(authService.login("uniformities", "123").equals(defaultErrMessage), true, "password Input Test Fail");
	}
	

}

