<?php 
error_reporting(E_ALL | E_WARNING | E_NOTICE);
ini_set('display_errors', TRUE);
ob_start(); 
$email_to='usha@techvzero.com';
$email_to='rajput.nitesh.49@gmail.com';


if(isset($_POST['name'])) {

 
 $email_subject = "Enquiry Chain Deck";
   
  if(empty($_POST['name']) ) {
 
  
      die('We are sorry, but there appears to be a problem with the form you submitted.');       
   }
 
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
  	$message = $_POST['message']; // required
  
    
   
    
    $error_message = "";
 
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  /*if(!preg_match($email_exp,$email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }*/
 
    
    $email_message = "<p><b>".$name."</b></p> \n\n";
    
	function clean_string($string) {
		$bad = array("content-type","bcc:","to:","cc:","href");
		return trim(str_replace($bad,"",$string));
	}

	function fileterdata($variable) {
		//$variable = strip_tags(mysql_real_escape_string(trim($variable)));
		
		return $variable; 
    }	
    
  
	

    $unique_string = rand(0, 1000000000000);
	
	
    $email_message .= "
<html>
<head>
    <title>HTML email</title>
  </head>
  <body>    
      <table style='background-color :#f1f2f1; padding: 5px 5px 5px 5px;'>
        <tr>";
            $email_message .= "<td>Name:</td>";
            $email_message .= "<td>".clean_string($name)."</td>\n";
            $email_message .= "</tr>
			
	  
		<tr>
            <td>Email:</td>";
           $email_message .= "<td>".clean_string($email)."</td>\n";
           $email_message .="</tr> 
		   
		<tr>   
			<td>Phone:</td>
          </tr>
      
		   
		<tr>   
			<td>Message:</td>";
           $email_message .= "<td>".clean_string($message)."</td>\n";
           $email_message .="</tr>   
		   
        
      </table>
    </body>
</html>
";

    // create email headers
    $headers = "From: usha@techvzero.com\r\nReply-To: usha@techvzero.com";
    $headers .='X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
   
   
    $checkmail = @mail($email_to, $email_subject, $email_message, $headers);  
    if( $checkmail == true )  
    {
      echo "<script type='text/javascript'>window.top.location='thanks.html';</script>"; exit;
    }else{
          echo "<script type='text/javascript'>window.top.location='thanks.html';</script>"; exit;
    }
   
 
?> 
<!-- include your own success html here -->
<?php } ?>