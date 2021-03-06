function CapturePlayerSceneConfig(){
	return [{
			"anchor": true,
			"enabled": true,
			"hasAnimations": false,
			"height": 40,
			"width": 40,
			"isStatic": false,
			"name": "cursor",
			"xPosition": 0,
			"xScale": 1,
			"yPosition": 0,
			"yScale": 1,
			"type": "image",
			"enabled": true
		},
		{
			"anchor": true,
			"enabled": true,
			"hasAnimations": false,
			"height": 0,
			"isStatic": true,
			"name": "playerCaptureText",
			"width": 0,
			"xPosition": 440,
			"xScale": 1.2,
			"yPosition": 245,
			"yScale": 1.2,
			"type": "text",
			"enabled": true,
			"text":"enter your name here..."
		},
		{
			"anchor": false,
			"enabled": true,
			"hasAnimations": false,
			"height": 40,
			"isStatic": true,
			"name": "playerCapture",
			"width": 500,
			"xPosition": 400,
			"xScale": 1,
			"yPosition": 240,
			"yScale": 1,
			"type": "sprite | image",
			"enabled": true
		},
		{
			"anchor": false,
			"enabled": true,
			"hasAnimations": true,
			"height": 50,
			"isStatic": true,
			"name": "submitButton",
			"width": 150,
			"xPosition": 400,
			"xScale": 1,
			"yPosition": 500,
			"yScale": 1,
			"type": "sprite | animation",
			"enabled": true
		},
		{
			"anchor": false,
			"enabled": true,
			"hasAnimations": false,
			"height": 600,
			"isStatic": true,
			"name": "scoreboardBackground",
			"width": 800,
			"xPosition": 0,
			"xScale": 1,
			"yPosition": 0,
			"yScale": 1,
			"type":"image",
			"enabled": true
		}
	];
}
module.exports=CapturePlayerSceneConfig;