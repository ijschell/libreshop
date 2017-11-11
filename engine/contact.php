<?php

// vars
// name
// mail
// phone
// comment
// haveweb

$nombre = $_POST['name'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$comment = $_POST['comment'];
$web = $_POST['haveweb'];

$para      = 'jschell.21.09.87@gmail.com';
$titulo    = 'Nuevo contacto desde Libre Shop Web';
$cabeceras = 'From: contacto@libreshop.com' . "\r\n" .
'Reply-To: '.$mail. "\r\n" .
'MIME-Version: 1.0\r\n'.
'Content-Type: text/html; charset=ISO-8859-1\r\n'.
'X-Mailer: PHP/' . phpversion();

$mensaje = '
<style>
  h2{
    font-size: 15px;
    color: #3333;
  }
  table{
    width: 450px;
    border: none;
  }
  table thead{
    background: #333;
    color: #fff;
  }
  table tr td{
    padding: 10px;
    font-size: 15px;
    color: #3333;
  }
</style>
<h2 style="font-size: 15px;color: #3333;">Nuevo contacto desde Libre Shop Web</h2>
<table cellspacing="0" cellpadding="0" style="width: 450px;border: none;">
  <thead style="background: #333;color: #fff;">
    <tr>
      <th>
        Nombre
      </th>
      <th>
        Mail
      </th>
      <th>
        Teléfono
      </th>
      <th>
        ¿Tiene web?
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 10px;font-size: 15px;color: #3333;">
        '.$nombre.'
      </td>
      <td style="padding: 10px;font-size: 15px;color: #3333;">
        '.$mail.'
      </td>
      <td style="padding: 10px;font-size: 15px;color: #3333;">
        '.$phone.'
      </td>
      <td style="padding: 10px;font-size: 15px;color: #3333;">
        '.$web.'
      </td>
    </tr>
  </tbody>
</table>
<p style="padding: 10px;font-size: 15px;color: #3333;"><b>Comentario: </b>'.$comment.'</p>
';

if(mail($para, $titulo, $mensaje, $cabeceras)){
  echo '<div class="good">Su mensaje fue envíado correctamente, estaremos en contacto muy pronto!</div>';
}else {
  echo '<div class="bad">Ocurrió un error al envíar el mensaje, contacte directamente a <a href="mailto:jschell.21.09.87@gmail.com">jschell.21.09.87@gmail.com</a></div>';
}

?>
