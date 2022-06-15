<html>
    <head>
        <title>Usando jquery site PHP</title>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="/resources/demos/style.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
        <script>
            $( function() {
            $( "#accordion" ).accordion();
            }  );
        </script>
    </head>
    <body>
        <div id="accordion">
        <?php
        for ($i = 0; $i < 10 ; $i++ ) {
            print("<h3>Linha numero </h3>"."<div><p>  $i </p></div>");
        }
        ?>
        </div>
    </body>

</html>