 import React from 'react';
 import ChatComponent from 'embeddable_voice_assistant_rn/src/ChatComponent';
  
 export default class AppEample extends React.Component {
    
   render(){
     return(<ChatComponent 
          DirectLineSecretKey="w-66ELMQVJU.G83-Y5e8eudQjF2nP2ZKhs3DhqmpYEIFtxJ99DzSCr0"//Place your secret key here
          HeaderTitle="MOC voice assistant"//place your header title here 
          HeaderIconPass="./src/images/moc_logo.jpeg"//place your logo url herenpm install
      />);
    }
 };
 
