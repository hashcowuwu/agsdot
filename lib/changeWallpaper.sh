#!/bin/bash
num=$RANDOM
urk='/home/hhj/wallpaper'
arr=(echo $urk/*)
sum=`ls -l $urk |grep "^-"|wc -l`
swww img  ${arr[($num%$sum)+1]} 	--transition-fps 60 --transition-type center 

