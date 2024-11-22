#!/bin/env python
import os
import random

getTransitionFps = lambda : str(random.randint(1,255))

transitionPos = [ 'center' , 'top ', 'left' ,'right','bottom','top-left','top-right','bottom-left','bottom-right']
OPT = ['transition-type','transition-fps','transition-pos']
transitionType="random"
transitionFps=10 

def getWallpaperFileDirectory():
    home=str(os.environ['HOME']) + "/wallpaper/"
    return home


wallpaperFileDirectory = getWallpaperFileDirectory()
imgFilesList = os.listdir(wallpaperFileDirectory)
def getWallpaperSrc():
    return wallpaperFileDirectory + random.choice(imgFilesList)


def operationWallapper():
    cmd = 'swww img ' + getWallpaperSrc() + ' --' + OPT[0] + ' ' + transitionType + ' --' + OPT[1] + ' ' +  getTransitionFps()  + ' --' + OPT[2] + ' ' + random.choice(transitionPos)
    os.system(cmd)
    #print(cmd)

operationWallapper()



#print(os.environ['HOME'])
