<html>

<body>
    <h2>Verify Your Email Address</h2>
    <p>
        Thanks for creating an account with the verification demo app.
        Please follow the link below to verify your email address
    </p>
    <p>
        This is your confirmation_code : {{ $code }}
    <p>
        <a href="{{ url('register/verify/' . $token) }}">
            Or Click here to verify your email
        </a>
    </p>
</body>

</html>