<!DOCTYPE html>
<html>

<head>
    <title>Password Reset</title>
</head>

<body>
    <h1>Password Reset</h1>
    <p>Use the following link to reset your password:</p>
    <a href="{{ url('http://localhost:3000/auth/reset-password/?token=' . $token) }}">Reset
        Password</a>
</body>

</html>
