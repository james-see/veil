<!DOCTYPE html>
<?php
header( 'Expires: Sat, 26 Jul 1997 05:00:00 GMT' );
header( 'Last-Modified: ' . gmdate( 'D, d M Y H:i:s' ) . ' GMT' );
header( 'Cache-Control: no-store, no-cache, must-revalidate' );
header( 'Cache-Control: post-check=0, pre-check=0', false );
header( 'Pragma: no-cache' );
header( 'FU: NO-JS-ASSCLOWN');
?>

<head>
	<title>No javascript</title>
</head>

<body>
<ul>
	<?php
$i = 0;
while ($i < 100000) {
	$bytes = openssl_random_pseudo_bytes(32);
	$hash = base64_encode($bytes);
	echo  "<li>$hash</li>";$i = $i + 1;}
	?>
</ul>
</body>

