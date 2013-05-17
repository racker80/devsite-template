<?php
$files = array('/index', '/blog/index', '/blog/single', '/coming-soon');

foreach($files as $file) {
	$ch = curl_init($_SERVER['HTTP_HOST'].$file.'.php');
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
	$content = curl_exec($ch);
	curl_close($ch);

	$content = str_replace('.php', '.html', $content);
	$content = str_replace('<a href="/', '<a href="/html/', $content);


	$my_file = dirname(__FILE__).'/html'.$file.'.html';
	file_put_contents($my_file, "");
	$handle = fopen($my_file, 'w') or die('Cannot open file:  '.$my_file);
	fwrite($handle, $content);

	echo '<p>Wrote file '.$file.'.html';
}



?>