Project Type = ActionScript Project 
SDK = Flex 4.5.1

Compiler and Project Settings
-----------------------------
Compiler Arguments = -locale en_US -define CONFIG::FLASH_10_1 true -define CONFIG::LOGGING true -define CONFIG::MOCK false -define CONFIG::PLATFORM true -swf-version 11


Libs
----
OSMF	(Use the version included in the Strobe project)
Strobe 	svn://svn.code.sf.net/adobe/smp/svn/trunk
SnagPlugin	git@git.assembla.com:snagfilms-embed-only-player.git


Setting up the Strobe project:
------------------------------
1. Import the OSMF project as a Flex Library Project
2. Go to Properties > Flex Library Path
3. Click on the Flex 4.5.1 item to open it up.
4. Click on the osmf.swc sub item and then click on the Remove button to remove it
5. Go to Properties > Flex Compiler
6. Add in the compiler arguments up above and click OK
7. Import the Strobe project as a Flex Library Project
8. Repeat steps 2 - 6 for the Strobe project
9. Go to Properties > Flex Library Path
10. Add the OSMF project as a source
11. Add the assets.swc in the assets folder as a library SWC
12. Click OK
13. Rebuild the projects or clean all projects


Strobe Customizations
---------------------
in StrobeMediaPlayback.as
- change onChromeProviderComplete from private to protected
- change injector from private to protected
- change set media from private to protected
- change _media from private to protected
- change mediaContainer from private to protected
- change controlBarContainer from private to protected
- surround this line: factory = injector.getInstance(MediaFactory); with an if block so it looks like:
	if( !factory )
	{
		factory = injector.getInstance(MediaFactory);
	}


FlashVars
---------
To test the FlashVars, you should put them in the index.template.html
1. open up html-template/index.template.html in the text editor
2. Find the flashvars block and add in the flashvars:
	var flashvars = {
    	src: 'rtmp://snagfilms.com/guid:00000139-25f6-ddfa-a7b9-b7fea6ff0000',
    	gaID: 'UA-33987606-1'
    };
3. The src is required and needs to be "guid:" plus an ID from the Wiki > Developer Documentation > Client-side API Information page
4. The gaID is the Google Analytics ID and should only be included if you're testing to see if the FlashVar override of the hard-coded value works. Otherwise remove it


Plugins Setup
=============
To test plugins locally, you'll need to use Node as a server
1. If you haven't already, install Node.js (http://nodejs.org/)
2. Open up a console window and navigate it to the project directory (the one that contains a server.js file)
3. Run the command: "npm install" and NPM will install the required modules
4. Run the command: "node server.js"
5. The server should start. If you have already compiled the project, you should be able to hit the debug version of the player by going to http://localhost:3000
6. To stop running the Node server (don't do this now) you can hit Ctrl + C and the server will stop
7. Go into Properties > ActionScript Build Path and in the Output Folder URL field enter http://localhost:3000/bin-debug
8. Accept your changes and exit. You should now be able to debug and load in plug-ins properly.