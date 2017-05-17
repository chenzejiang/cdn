<?php
    $path = "./frame/";
    $a = array();
    function createDir($path = '.')
    {
        if ($handle = opendir($path)){
            $queue = array();
            while (false !== ($file = readdir($handle)))
            {
                if (is_dir($path.$file) && $file != '.' && $file !='..'){
                  printSubDir($file, $path);
                }else if ($file != '.' && $file !='..'){
                  $queue[] = $file;  // 去掉/

                }

            }
            printQueue($queue, $path);
        }
        return $queue;
    }
    function printQueue($queue, $path)
    {
        foreach ($queue as $file)
        {
            printFile($file, $path);
        }
    }
    function printFile($file, $path)
    {
    }
    function printSubDir($dir, $path)
    {
        $r = createDir($path.$dir."/");
        global $a;
        $a[$dir] = $r;
    }
    createDir($path);
    echo json_encode($a);
?>
