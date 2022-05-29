---
title: php基础

date: 2021-11-14 09:33:43


---

## 第1章 php语法

1. **特点**  
   关键字大小写不敏感，但是变量敏感

```js
<?php
    echo "Hello World!";
?>
```

echo 网页上显示字符串

---

2. **变量**  
   以`$`开头定义变量，不需要声明，没有类型  
   作用域 全局 局部 静态  
   全局只能在全局访问 局部只能在局部访问  
   局部要访问全局的需要在变量前加global关键字  
   或者用$GLOBALS数组  
   `global $x,$y;`  
   `$GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];`

显示变量

```js
<?php
//创建字符串
$txt1="Learn PHP";
$txt2="W3School.com.cn";
//创建数组
$cars=array("Volvo","BMW","SAAB");

echo $txt1;
//显示html标记
echo "<br>";
//字符串中显示变量
echo "Study PHP at $txt2";
//显示数组
echo "My car is a {$cars[0]}";
?>
```

---

3. **数据类型**  
   字符串: ""  
   整数： 不能有小数点，正负均可  
   浮点数：有小数点  
   逻辑： 布尔  
   数组： array（）  
   对象：class obj  
   NULL值： null

---

4. **字符串函数**

返回字符串长度

```js
<?php
echo strlen("Hello world!");  //输出15
?>
```

输出字符串的单词个数

```js
<?php
echo str_word_count("Hello world!"); // 输出 2
?>
```

反转字符串

```js
<?php
echo strrev("Hello world!"); // 输出 !dlrow olleH
?>
```

查找字符串是否出现  
出现则返回第一个字符的索引，否则返回false

```js
<?php
echo strpos("Hello world!","world");  //返回7 
?>
```

替换字符串中的文本

```js
<?php
echo str_replace("world", "Kitty", "Hello world!"); // 输出 Hello Kitty!
?>
```

---

5. **常量**  
   常量是全局的，且函数内部也可以访问

```js
<?php
define("GREETING", "Welcome to W3School.com.cn!");
echo GREETING;
?>
```

---

6. **运算符**

算数 + - * / %

赋值  =

字符串 `.` 串接  `.=` 串接赋值

```js
<?php
$a = "Hello";
$b = $a . " world!";
echo $b; // 输出 Hello world!

$x="Hello";
$x .= " world!";
echo $x; // 输出 Hello world!
?>
```

---

7. **if 判断**

```js
<?php
$t=date("H");

if ($t<"10") {
  echo "Have a good morning!";
} elseif ($t<"20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
?>
```

---

8. **switch**

```js
<?php
$favfruit="orange";

switch ($favfruit) {
   case "apple":
     echo "Your favorite fruit is apple!";
     break;
   case "banana":
     echo "Your favorite fruit is banana!";
     break;
   case "orange":
     echo "Your favorite fruit is orange!";
     break;
   default:
     echo "Your favorite fruit is neither apple, banana, or orange!";
}
?>
```

---

9. **while 循环**

```js
<?php 
$x=1; 

while($x<=5) {
  echo "这个数字是：$x <br>";
  $x++;
} 
?>
```

```js
<?php 
$x=6;

do {
  echo "这个数字是：$x <br>";
  $x++;
} while ($x<=5);
?>
```

---

10. **for 循环**

```js
<?php 
for ($x=0; $x<=10; $x++) {
  echo "数字是：$x <br>";
} 
?>
```

```js
<?php 
$colors = array("red","green","blue","yellow"); 

foreach ($colors as $value) {
  echo "$value <br>";
}
?>
```

---


11. **函数**

```js
<?php
function familyName($fname,$year) {
  echo "$fname Zhang. Born in $year <br>";
  }
  familyName("Li","1975");
  ?>
```

带默认值的

```js
<?php
function setHeight($minheight=50) {
  echo "The height is : $minheight <br>";
  }
  setHeight(350);
  setHeight(); // 将使用默认值 50
  ?>
```

带返回值

```js
<?php
function sum($x,$y) {
  $z=$x+$y;
    return $z;
    }
    echo "5 + 10 = " . sum(5,10) . "<br>";
    echo "7 + 13 = " . sum(7,13) . "<br>";
?>
```

---

12. **数组**

有三种数组  
索引数组 带有数字索引的数组  
关联数组 带有指定键的数组  
多维数组 包含一个或多个数组的数组

索引数组

```js
$cars=array("porsche","BMW","Volvo");

$cars[0]="porsche";
$cars[1]="BMW";
$cars[2]="Volvo";

//获取数组长度
<?php
$cars=array("porsche","BMW","Volvo");
echo count($cars);
?>

//遍历索引数组
<?php
$cars=array("porsche","BMW","Volvo");
$arrlength=count($cars);

for($x=0;$x<$arrlength;$x++) {
  echo $cars[$x];
  echo "<br>";
}
?>
```

关联数组

```js
$age=array("Bill"=>"35","Steve"=>"37","Elon"=>"43");

$age['Bill']="63";
$age['Steve']="56";
$age['Elon']="47";

//遍历关联数组
<?php
$age=array("Bill"=>"63","Steve"=>"56","Elon"=>"47");

foreach($age as $x=>$x_value) {
  echo "Key=" . $x . ", Value=" . $x_value;
  echo "<br>";
}
?>
```

---

13. **数组排序**  
    sort() - 以升序对数组排序  
    rsort() - 以降序对数组排序  
    asort() - 根据值，以升序对关联数组进行排序  
    ksort() - 根据键，以升序对关联数组进行排序  
    arsort() - 根据值，以降序对关联数组进行排序  
    krsort() - 根据键，以降序对关联数组进行排序

---

14. **超全局变量**  
    $GLOBALS  
    $_SERVER   
    $_REQUEST  
    $_POST  
    $_GET   
    $_FILES  
    $_ENV  
    $_COOKIE  
    $_SESSION


## 第2章 php进阶

1. **多维数组**

```js
$cars = array
  (
  array("Volvo",22,18),
  array("BMW",15,13),
  array("Saab",5,2),
  array("Land Rover",17,15)
  );
  
  
  <?php
echo $cars[0][0].": 库存：".$cars[0][1].", 销量：".$cars[0][2].".<br>";
echo $cars[1][0].": 库存：".$cars[1][1].", 销量：".$cars[1][2].".<br>";
echo $cars[2][0].": 库存：".$cars[2][1].", 销量：".$cars[2][2].".<br>";
echo $cars[3][0].": 库存：".$cars[3][1].", 销量：".$cars[3][2].".<br>";
?>


<?php
for ($row = 0; $row < 4; $row++) {
  echo "<p><b>Row number $row</b></p>";
  echo "<ul>";
  for ($col = 0; $col < 3; $col++) {
    echo "<li>".$cars[$row][$col]."</li>";
  }
  echo "</ul>";
}
?>
```

---

2. **日期**

```js
<?php
echo "今天是 " . date("Y/m/d") . "<br>";
echo "今天是 " . date("Y.m.d") . "<br>";
echo "今天是 " . date("Y-m-d") . "<br>";
echo "今天是 " . date("l");
?>

© 2010-<?php echo date("Y")?>

<?php
echo "现在时间是 " . date("h:i:sa");
?>
```

---

3. **引入文件**  
   require 会生成致命错误（E_COMPILE_ERROR）并停止脚本  
   include 只生成警告（E_WARNING），并且脚本会继续

```js
include 'filename';
require 'filename';
```

---

4. **操作文件**

读取文件

```js
<?php
echo readfile("webdictionary.txt");
?>
```

```js
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("webdictionary.txt"));
fclose($myfile);
?>
```

逐行读取

```js
<?php
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// 输出单行直到 end-of-file
while(!feof($myfile)) {
  echo fgets($myfile) . "<br>";
}
fclose($myfile);
?>
```

逐个字符读取

```js
$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");
// 输出单字符直到 end-of-file
while(!feof($myfile)) {
  echo fgetc($myfile);
}
fclose($myfile);
?>

<?php
```

写入

```js
<?php
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Bill Gates\n";
fwrite($myfile, $txt);
$txt = "Steve Jobs\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
```

文件上传

```js
//上传表单
<html>
<body>

<form action="upload_file.php" method="post"
enctype="multipart/form-data">
<label for="file">Filename:</label>
<input type="file" name="file" id="file" /> 
<br />
<input type="submit" name="submit" value="Submit" />
</form>

</body>
</html>


//上传脚本 保存上传的文件
<?php
if ((($_FILES["file"]["type"] == "image/gif")
                || ($_FILES["file"]["type"] == "image/jpeg")
                || ($_FILES["file"]["type"] == "image/pjpeg"))
        && ($_FILES["file"]["size"] < 20000))
{
   if ($_FILES["file"]["error"] > 0)
   {
      echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
   }
   else
   {
      echo "Upload: " . $_FILES["file"]["name"] . "<br />";
      echo "Type: " . $_FILES["file"]["type"] . "<br />";
      echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
      echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

      if (file_exists("upload/" . $_FILES["file"]["name"]))
      {
         echo $_FILES["file"]["name"] . " already exists. ";
      }
      else
      {
         move_uploaded_file($_FILES["file"]["tmp_name"],
                 "upload/" . $_FILES["file"]["name"]);
         echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
      }
   }
}
else
{
   echo "Invalid file";
}
        ?>
```

---

5. **cookies**

创建cook  
必须在html标签之前  
创建user: alex porter的cook，设置时间为一小时后过期

```js
<?php 
setcookie("user", "Alex Porter", time()+3600);
?>
```

取回cook

```js
<?php
if (isset($_COOKIE["user"]))
  echo "Welcome " . $_COOKIE["user"] . "!<br />";
else
  echo "Welcome guest!<br />";
?>
```

删除cook

```js
<?php 
// set the expiration date to one hour ago
setcookie("user", "", time()-3600);
?>
```

---

6. **sessions**

创建session

```js
<?php
session_start();

if(isset($_SESSION['views']))
  $_SESSION['views']=$_SESSION['views']+1;

else
  $_SESSION['views']=1;
echo "Views=". $_SESSION['views'];
?>
```

删除session

```js
<?php
unset($_SESSION['views']);
?>
```

删除所有session

```js
<?php
session_destroy();
?>
```

---

7. **email**  
   发送邮件

```js
<html>
<body>
<?php
function spamcheck($field)
  {
  //filter_var() sanitizes the e-mail 
  //address using FILTER_SANITIZE_EMAIL
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);

//filter_var() validates the e-mail
//address using FILTER_VALIDATE_EMAIL
if(filter_var($field, FILTER_VALIDATE_EMAIL))
{
return TRUE;
}
else
{
return FALSE;
}
}

if (isset($_REQUEST['email']))
{//if "email" is filled out, proceed

//check if the email address is invalid
$mailcheck = spamcheck($_REQUEST['email']);
if ($mailcheck==FALSE)
{
echo "Invalid input";
}
else
{//send email
$email = $_REQUEST['email'] ;
$subject = $_REQUEST['subject'] ;
$message = $_REQUEST['message'] ;
mail("someone@example.com", "Subject: $subject",
$message, "From: $email" );
echo "Thank you for using our mail form";
}
}
else
{//if "email" is not filled out, display the form
echo "<form method='post' action='mailform.php'>
Email: <input name='email' type='text' /><br />
Subject: <input name='subject' type='text' /><br />
Message:<br />
<textarea name='message' rows='15' cols='40'>
</textarea><br />
<input type='submit' />
  </form>";
  }
?>

</body>
</html>
```

---

8. **error**

```js
<?php
//error handler function
function customError($errno, $errstr)
 { 
 echo "<b>Error:</b> [$errno] $errstr<br />";
 echo "Ending Script";
 die();
 }

//set error handler
set_error_handler("customError",E_USER_WARNING);

//trigger error
$test=2;
if ($test>1)
 {
 trigger_error("Value must be 1 or below",E_USER_WARNING);
 }
?>
```

---

9. **exception**

```js
<?php
//创建可抛出一个异常的函数
function checkNum($number)
 {
 if($number>1)
  {
  throw new Exception("Value must be 1 or below");
  }
 return true;
 }

//在 "try" 代码块中触发异常
try
 {
 checkNum(2);
 //If the exception is thrown, this text will not be shown
 echo 'If you see this, the number is 1 or below';
 }

//捕获异常
catch(Exception $e)
 {
 echo 'Message: ' .$e->getMessage();
 }
?>
```

自定义异常类

```js
<?php
class customException extends Exception
 {
 public function errorMessage()
  {
  //error message
  $errorMsg = 'Error on line '.$this->getLine().' in '.$this->getFile()
  .': <b>'.$this->getMessage().'</b> is not a valid E-Mail address';
  return $errorMsg;
  }
 }

$email = "someone@example...com";

try
 {
 //check if 
 if(filter_var($email, FILTER_VALIDATE_EMAIL) === FALSE)
  {
  //throw exception if email is not valid
  throw new customException($email);
  }
 }

catch (customException $e)
 {
 //display custom message
 echo $e->errorMessage();
 }
?>
```

---

10. **filter**

```js
<?php
$int = 123;

if(!filter_var($int, FILTER_VALIDATE_INT)) {
 echo("Integer is not valid");
 }
else {
 echo("Integer is valid");
 }
?>
```

## 第3章 表单

1. **表单处理**

```js
<html>
<body>

<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>
```

---

2. **表单验证**

```js
<?php
// 定义变量并设置为空值
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $email = test_input($_POST["email"]);
  $website = test_input($_POST["website"]);
  $comment = test_input($_POST["comment"]);
  $gender = test_input($_POST["gender"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
```

---

3. **表单必填**

```js
<!DOCTYPE HTML> 
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body> 

<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "姓名是必填的";
   } else {
     $name = test_input($_POST["name"]);
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "电邮是必填的";
   } else {
     $email = test_input($_POST["email"]);
   }
     
   if (empty($_POST["website"])) {
     $website = "";
   } else {
     $website = test_input($_POST["website"]);
   }

   if (empty($_POST["comment"])) {
     $comment = "";
   } else {
     $comment = test_input($_POST["comment"]);
   }

   if (empty($_POST["gender"])) {
     $genderErr = "性别是必选的";
   } else {
     $gender = test_input($_POST["gender"]);
   }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>

<h2>PHP 验证实例</h2>
<p><span class="error">* 必需的字段</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
   姓名：<input type="text" name="name">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   电邮：<input type="text" name="email">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   网址：<input type="text" name="website">
   <span class="error"><?php echo $websiteErr;?></span>
   <br><br>
   评论：<textarea name="comment" rows="5" cols="40">

```

---

4. **表单url、email验证**

```js
<!DOCTYPE HTML> 
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body> 

<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "姓名是必填的";
   } else {
     $name = test_input($_POST["name"]);
     // 检查姓名是否包含字母和空白字符
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = "只允许字母和空格"; 
     }
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "电邮是必填的";
   } else {
     $email = test_input($_POST["email"]);
     // 检查电子邮件地址语法是否有效
     if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
       $emailErr = "无效的 email 格式"; 
     }
   }
     
   if (empty($_POST["website"])) {
     $website = "";
   } else {
     $website = test_input($_POST["website"]);
     // 检查 URL 地址语法是否有效（正则表达式也允许 URL 中的斜杠）
     if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
       $websiteErr = "无效的 URL"; 
     }
   }

   if (empty($_POST["comment"])) {
     $comment = "";
   } else {
     $comment = test_input($_POST["comment"]);
   }

   if (empty($_POST["gender"])) {
     $genderErr = "性别是必选的";
   } else {
     $gender = test_input($_POST["gender"]);
   }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>

<h2>PHP 验证实例</h2>
<p><span class="error">* 必需的字段</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
   姓名：<input type="text" name="name">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   电邮：<input type="text" name="email">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   网址：<input type="text" name="website">
   <span class="error"><?php echo $websiteErr;?></span>
   <br><br>
   评论：<textarea name="comment" rows="5" cols="40">

```

---

5. **表单完成**

```js
<!DOCTYPE HTML> 
<html>
<head>
<style>
.error {color: #FF0000;}
</style>
</head>
<body> 

<?php
// 定义变量并设置为空值
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "姓名是必填的";
   } else {
     $name = test_input($_POST["name"]);
     // 检查姓名是否包含字母和空白字符
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = "只允许字母和空格"; 
     }
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "电邮是必填的";
   } else {
     $email = test_input($_POST["email"]);
     // 检查电子邮件地址语法是否有效
     if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/",$email)) {
       $emailErr = "无效的 email 格式"; 
     }
   }
     
   if (empty($_POST["website"])) {
     $website = "";
   } else {
     $website = test_input($_POST["website"]);
     // 检查 URL 地址语法是否有效（正则表达式也允许 URL 中的斜杠）
     if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
       $websiteErr = "无效的 URL"; 
     }
   }

   if (empty($_POST["comment"])) {
     $comment = "";
   } else {
     $comment = test_input($_POST["comment"]);
   }

   if (empty($_POST["gender"])) {
     $genderErr = "性别是必选的";
   } else {
     $gender = test_input($_POST["gender"]);
   }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
?>

<h2>PHP 验证实例</h2>
<p><span class="error">* 必需的字段</span></p>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
   姓名：<input type="text" name="name">
   <span class="error">* <?php echo $nameErr;?></span>
   <br><br>
   电邮：<input type="text" name="email">
   <span class="error">* <?php echo $emailErr;?></span>
   <br><br>
   网址：<input type="text" name="website">
   <span class="error"><?php echo $websiteErr;?></span>
   <br><br>
   评论：<textarea name="comment" rows="5" cols="40">
```

## 第4章 XML

1. **expat**  
   基于时间的解析器  
   `xml文件`

```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<note>
<to>George</to>
<from>John</from>
<heading>Reminder</heading>
<body>Don't forget the meeting!</body>
</note>
```

脚本

```js
<?php

//Initialize the XML parser
$parser=xml_parser_create();

//Function to use at the start of an element
function start($parser,$element_name,$element_attrs)
  {
  switch($element_name)
    {
    case "NOTE":
    echo "-- Note --<br />";
    break; 
    case "TO":
    echo "To: ";
    break; 
    case "FROM":
    echo "From: ";
    break; 
    case "HEADING":
    echo "Heading: ";
    break; 
    case "BODY":
    echo "Message: ";
    }
  }

//Function to use at the end of an element
function stop($parser,$element_name)
  {
  echo "<br />";
  }

//Function to use when finding character data
function char($parser,$data)
  {
  echo $data;
  }

//Specify element handler
xml_set_element_handler($parser,"start","stop");

//Specify data handler
xml_set_character_data_handler($parser,"char");

//Open XML file
$fp=fopen("test.xml","r");

//Read data
while ($data=fread($fp,4096))
  {
  xml_parse($parser,$data,feof($fp)) or 
  die (sprintf("XML Error: %s at line %d", 
  xml_error_string(xml_get_error_code($parser)),
  xml_get_current_line_number($parser)));
  }

//Free the XML parser
xml_parser_free($parser);

?>

//输出
-- Note --
To: George
From: John
Heading: Reminder
Message: Don't forget the meeting!
```

---

2. **dom**  
   基于树的解析器

```js
//脚本
<?php
$xmlDoc = new DOMDocument();
$xmlDoc->load("note.xml");

$x = $xmlDoc->documentElement;
foreach ($x->childNodes AS $item)
{
   print $item->nodeName . " = " . $item->nodeValue . "<br />";
}
        ?>

//输出
#text =
        to = George
#text =
        from = John
#text =
        heading = Reminder
#text =
        body = Don't forget the meeting!
```

---

3. **simpleXML**  
   更简单，但如果需要命名空间时不建议使用。

```js
<?php
$xml = simplexml_load_file("test.xml");

echo $xml->getName() . "<br />";

foreach($xml->children() as $child)
  {
  echo $child->getName() . ": " . $child . "<br />";
  }
?>

//输出
note
to: George
from: John
heading: Reminder
body: Don't forget the meeting!

```

## 第5章 数据库

1. **连接数据库**

```js
<?php
//连接数据库
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

// 创建数据库
if (mysql_query("CREATE DATABASE my_db",$con))
  {
  echo "Database created";
  }
else
  {
  echo "Error creating database: " . mysql_error();
  }
  
  // 创建新表
mysql_select_db("my_db", $con);
$sql = "CREATE TABLE Persons 
(
personID int NOT NULL AUTO_INCREMENT, 
PRIMARY KEY(personID),
FirstName varchar(15),
LastName varchar(15),
Age int
)";
mysql_query($sql,$con);
 
//插入数据
mysql_query("INSERT INTO Persons (FirstName, LastName, Age) 
VALUES ('Peter', 'Griffin', '35')");
mysql_query("INSERT INTO Persons (FirstName, LastName, Age) 
VALUES ('Glenn', 'Quagmire', '33')");

  
//关闭数据库
mysql_close($con);
?>
```

---

2. **表单数据插入数据库**

```js
<html>
<body>
<form action="insert.php" method="post">
Firstname: <input type="text" name="firstname" />
Lastname: <input type="text" name="lastname" />
Age: <input type="text" name="age" />
<input type="submit" />
</form>
</body>
</html>
```

```js
<?php
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("my_db", $con);

$sql="INSERT INTO Persons (FirstName, LastName, Age)
VALUES
('$_POST[firstname]','$_POST[lastname]','$_POST[age]')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con)
?>
```

3. **查询数据库展示在html中**

```js
<?php
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("my_db", $con);

$result = mysql_query("SELECT * FROM Persons");

echo "<table border='1'>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>";

while($row = mysql_fetch_array($result))
  {
  echo "<tr>";
  echo "<td>" . $row['FirstName'] . "</td>";
  echo "<td>" . $row['LastName'] . "</td>";
  echo "</tr>";
  }
echo "</table>";

mysql_close($con);
?>
```

---

4. **where**

```js
<?php
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("my_db", $con);

$result = mysql_query("SELECT * FROM Persons
WHERE FirstName='Peter'");

while($row = mysql_fetch_array($result))
  {
  echo $row['FirstName'] . " " . $row['LastName'];
  echo "<br />";
  }

?>
```

---

5. **order by**

```js
<?php
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("my_db", $con);
    
    //升序排列
$result = mysql_query("SELECT * FROM Persons ORDER BY age");
    //降序排列
    //ORDER BY column_name DESC
while($row = mysql_fetch_array($result))
  {
  echo $row['FirstName'];
  echo " " . $row['LastName'];
  echo " " . $row['Age'];
  echo "<br />";
  }

mysql_close($con);
?>
```

---

6. **update**

```js
<?php
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("my_db", $con);

mysql_query("UPDATE Persons SET Age = '36'
WHERE FirstName = 'Peter' AND LastName = 'Griffin'");

mysql_close($con);
?>
```

---

7. **delete**

```js
<?php
$con = mysql_connect("localhost","peter","abc123");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("my_db", $con);

mysql_query("DELETE FROM Persons WHERE LastName='Griffin'");

mysql_close($con);
?>
```

---

8. **odbc连接**

```js
<html>
<body>

<?php
$conn=odbc_connect('northwind','','');
if (!$conn)
  {exit("Connection Failed: " . $conn);}
$sql="SELECT * FROM customers";
$rs=odbc_exec($conn,$sql);
if (!$rs)
  {exit("Error in SQL");}
echo "<table><tr>";
echo "<th>Companyname</th>";
echo "<th>Contactname</th></tr>";
 
 //取回记录
while (odbc_fetch_row($rs))
{
   
     //从记录中取回字段
  $compname=odbc_result($rs,"CompanyName");
  $conname=odbc_result($rs,"ContactName");
  echo "<tr><td>$compname</td>";
  echo "<td>$conname</td></tr>";
}

//odbc_close()函数用于关闭 ODBC 连接。
odbc_close($conn);

echo "</table>";
?>

</body>
</html>
```


## 第6章 PDO

1. **PDO 简介**  
   PHP 数据对象 （PDO） 扩展为PHP访问数据库定义了一个轻量级的一致接口。  
   PDO 提供了一个数据访问抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。  
   PDO随PHP5.1发行，在PHP5.0的PECL扩展中也可以使用，无法运行于之前的PHP版本。

---

2. **PDO 安装**  
   你可以通过 PHP 的 phpinfo() 函数来查看是否安装了PDO扩展。  
   在 Unix 系统上安装 PDO  
   在Unix上或Linux上你需要添加以下扩展：  
   `extension=pdo.so`

各种数据库扩展：

```text
;extension=php_pdo_firebird.dll
;extension=php_pdo_informix.dll
;extension=php_pdo_mssql.dll
;extension=php_pdo_mysql.dll
;extension=php_pdo_oci.dll
;extension=php_pdo_oci8.dll
;extension=php_pdo_odbc.dll
;extension=php_pdo_pgsql.dll
;extension=php_pdo_sqlite.dll
```

在设定好这些配置后，我们需要重启PHP 或 Web服务器。  
接下来我们们来看下具体的实例，以下为使用PDO连接MySql数据库的实例：

预定义常量  
PHP PDO连接连接管理  
PHP PDO 事务与自动提交  
PHP PDO 预处理语句与存储过程  
PHP PDO 错误与错误处理  
PHP PDO 大对象 (LOBs)

PDO 类：

- 启动一个事务
  PDO::beginTransaction
- 提交一个事务
  PDO::commit
- 创建一个表示数据库连接的 PDO 实例
  PDO::__construct
- 获取跟数据库句柄上一次操作相关的 SQLSTATE
  PDO::errorCode
- 返回最后一次操作数据库的错误信息
  PDO::errorInfo
- 执行一条 SQL 语句，并返回受影响的行数
  PDO::exec
- 取回一个数据库连接的属性
  PDO::getAttribute
- 返回一个可用驱动的数组
  PDO::getAvailableDrivers
- 检查是否在一个事务内
  PDO::inTransaction
- 返回最后插入行的ID或序列值
  PDO::lastInsertId
- 备要执行的SQL语句并返回一个 PDOStatement 对象
  PDO::prepare
- 执行 SQL 语句，返回PDOStatement对象,可以理解为结果集
  PDO::query
- 为SQL语句中的字符串添加引号。
  PDO::quote
- 回滚一个事务
  PDO::rollBack
- 设置属性
  PDO::setAttribute

PDOStatement 类：

- 绑定一列到一个 PHP 变量
  PDOStatement::bindColumn
- 绑定一个参数到指定的变量名
  PDOStatement::bindParam
- 把一个值绑定到一个参数
  PDOStatement::bindValue
- 关闭游标，使语句能再次被执行。
  PDOStatement::closeCursor
- 返回结果集中的列数
  PDOStatement::columnCount
- 打印一条 SQL 预处理命令
  PDOStatement::debugDumpParams
- 获取跟上一次语句句柄操作相关的 SQLSTATE
  PDOStatement::errorCode
- 获取跟上一次语句句柄操作相关的扩展错误信息
  PDOStatement::errorInfo
- 执行一条预处理语句
  PDOStatement::execute
- 从结果集中获取下一行
  PDOStatement::fetch
- 返回一个包含结果集中所有行的数组
  PDOStatement::fetchAll
- 从结果集中的下一行返回单独的一列。
  PDOStatement::fetchColumn
- 获取下一行并作为一个对象返回。
  PDOStatement::fetchObject
- 检索一个语句属性
  PDOStatement::getAttribute
- 返回结果集中一列的元数据
  PDOStatement::getColumnMeta
- 在一个多行集语句句柄中推进到下一个行集
  PDOStatement::nextRowset
- 返回受上一个 SQL 语句影响的行数
  PDOStatement::rowCount
- 设置一个语句属性
  PDOStatement::setAttribute
- 为语句设置默认的获取模式
  PDOStatement::setFetchMode