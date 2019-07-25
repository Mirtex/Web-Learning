<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Grounds (And cheat sheet)</title>
  </head>
  <body>
    <h1>PHP Testing Grounds</h1>
    <h2>1. Variables</h2>

    <?php
      $firstName = "Ernesto";
      $lastName = "Eusebio";
      $age = 32;
      $cash = 105.50;
      $string = "This is a string\r\n";
      $escSequence = 'Let\'s escape that quote';
      //<br> works with HTML, but \r\n actually work, but remember html eats anything after the first space, this can be seen in the browser through "View page source"

      /* When using "double quotes" you can escape most common characters that
       *need it, however, when using 'single quotes' only \' is escaped, because
       *it treats all the others as literal text
       **********************************************************************/
      echo $firstName, ' ', $lastName, " Age: "; //Echo can print multiple values
      print $age; //Print can only print one value
      print $string;
      echo $escSequence;
      #This is also a comment.
      /* As well as
      this one, :) */
    ?>

    <h2>2. Working with Strings</h2>
    <?php

      $fullName = $firstName . ' ' . $lastName;
      $nameAndAge = "$firstName $lastName is $age years old"; //This would not work with 'single quotes'
      echo $fullName . '<br>';  //html line break
      echo $nameAndAge;


      $concatenatedString = "<br> Hello";
      $concatenatedString = $concatenatedString . ", My name is " . $firstName;
      $concatenatedString .= ' ' . $lastName; // .= works like +=
      echo $concatenatedString;
      echo "<br>";

      //Heredoc syntax
$heredoc = <<<HEREDOC
      This is a heredoc section where i can use "quotes" and 'single quotes' any way i want, as well as ' and " and escape sequences work too. I can also add variables like age: $age, very convenient for stuff like SQL queries.
HEREDOC;

      echo $heredoc;

      //Arrays
      $firstArray = array(1, 2, "Three");
      $secondArray = ['One', 'Two', 'le Three'];

      echo "<br>"; //arrays cannot be used with echo.
      print_r($firstArray);
      echo "<br>";
      print_r($secondArray);
      echo "<br>";

      $firstArray[] = 'Four';
      print_r($firstArray);
      echo "<br>";

      echo $firstArray[2];
      echo "<br>";

      //Associative array (like dictionaries in C#)
      $assocArray = [
                      "Name"  => "John Doe",
                      "Age"   => "233",
                      "Job"   => "Baskin Robbins",
                      "Email" => "mr.juanito@hotmail.com"
                    ];

      print_r($assocArray);
      echo "<br>" . "Hello Mr. {$assocArray['Name']} you have been fired from {$assocArray['Job']}";

    ?>

  </body>
</html>
