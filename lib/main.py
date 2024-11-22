import os
import random

getTransitionFps = lambda : random.randint(1,255)

transitionPos = [ 'center' , 'top ', 'left' ,'right','bottom','top-left','top-right','bottom-left','bottom-right']
transitionType="rand"
transitionFps=10 

def getWallpaperFileDirectory():
    home=str(os.environ['HOME']) + "/wallpaper/"
    return home


wallpaperFileDirectory = getWallpaperFileDirectory()
imgFilesList = os.listdir(wallpaperFileDirectory)
imgId = random.randint(0,len(imgFilesList) - 1)

def getWallpaperSrc():
    return wallpaperFileDirectory + imgFilesList[imgId]


def operationWallapper():
    cmd = 'swww img ' + getWallpaperSrc()
    os.system(cmd)
    print(cmd)

operationWallapper()



#print(os.environ['HOME'])
