<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <link href="{{asset('css/main-style.css')}}" rel="stylesheet" />
    <link href="{{asset('css/app.css')}}" rel="stylesheet" />
    <script src="https://kit.fontawesome.com/9f6f62aa5e.js" crossorigin="anonymous"></script>

</head>

<body>

    <div id="root"></div>

    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>