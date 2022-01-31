#!/bin/bash

for f in $(ls *.png)
do 
	filename=$(basename -- $f)
	extension="${filename##*.}"
	firstpart="${filename%.*}"
	cwebp -q 80 $filename -o $firstpart.webp 
done
