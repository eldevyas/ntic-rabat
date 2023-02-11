<!DOCTYPE html>
<html>

<head>
    <title>Password Reset</title>
</head>

<body>
    <h1>Password Reset</h1>
    <p>Use the following code to reset your password:</p>
    <h2>{{ $code }}</h2>
    <p>Or click on the following link:</p>
    <a href="{{ url('api/reset-password/?token=' . $token . '&email='
    // encrypt email
    . urlencode(encrypt($email))
    ) }}">Reset Password</a>
</body>

</html>