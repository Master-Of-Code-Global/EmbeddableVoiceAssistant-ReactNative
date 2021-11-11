# EmbeddableVoiceAssistant-ReactNative
Embeddable Voice Assistant is a React Native component for mobile apps. It can communicate with [Microsoft Azure Bot](https://dev.botframework.com) via [Direct Line](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channel-directline?view=azure-bot-service-4.0) with voice, text  and [Adaptive Cards](https://adaptivecards.io)  UI interface 
Assistant has a demo basic flow with sharing weather forecast, news and jokes, and demonstrates the main Voice Assistant possibilities.  But it is possible to connect any other  Bot Framework based bot with or without Adaptive Cards.

## Installation
To add the EmbeddableVoiceAssistant component to your react-native project:
1. Copy file "embeddable_voice_assistant_rn-0.0.1.tgz" to the root folder of your project
2. Open terminal, go to your project root folder
3. Run command "npm install ./embeddable_voice_assistant_rn-0.0.1.tgz" 

## Usage
1. Import component to your script "import ChatComponent from 'embeddable_voice_assistant_rn/src/ChatComponent';"
2. Add ChatComponent to your render method:
    render(){
     return(
        <ChatComponent 
          DirectLineSecretKey="Place your directline token here"
          HeaderTitle="Place your header title here"
          HeaderIconPass="Place path to your logo here"
        />
      );
    }
3. The communication with bot is done via Direct Line channel. You can find "YOUR_TOKEN" of your bot [there](https://portal.azure.com/#home). 
   Open a resource with type Bot Channels Registration, select Settings -> Channels -> Direct Line -> Edit. Put one Secret key to "secretToken" parameter for connecting with your bot.

## Permissions
Android: 
    add following lines to your AndroidManifest.xml:
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <queries>
            <intent>
                <action android:name="android.speech.RecognitionService"/>
            </intent>
        </queries>

iOS:
    add following lines to your Info.plist file:
        <key>NSMicrophoneUsageDescription</key>
        <string>Description of why you require the use of the microphone</string>
        <key>NSSpeechRecognitionUsageDescription</key>
        <string>Description of why you require the use of the speech recognition</string>

## Example
You can run project from this repository as an example of Embeddable voice assistant
1. Clone this repository 
2. Run "npm install" in Terminal
3. Run "npm start" in Terminal

## License
EmbeddableVoiceAssistant is available under the MIT license. See the [LICENSE](/LICENSE) file for more info.
