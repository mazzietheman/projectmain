$(function () {
	const token = localStorage.getItem("token");
	$.ajax({
		url: "http://localhost:3000/auth/test_login",
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + token);
		},
		success: function (data) {
			if (data.success) {
				$("#head").load("menu-" + data.role + ".html");
			}
		},
		error: function (xhr, status, error) {
			window.location.href = "http://localhost:3000/login.html";
		},
		dataType: "json",
	});
});
