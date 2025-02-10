import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SpeechSynthesizerService } from '../web-apis/speech-synthesizer.service';
import { ActionStrategy } from './action-strategy';
@Injectable({
  providedIn: 'root',
})
export class ChangeTitleStrategy extends ActionStrategy {
  private title?: Title;
  constructor(private speechSynthesizer: SpeechSynthesizerService) {
    super();
    this.mapStartSignal.set('en-US', 'perform change title');
    this.mapStartSignal.set('en-GB', 'Perform change title');
    this.mapStartSignal.set('ta-IN', 'தலைப்புக் கருவி செய்யவும்');
    this.mapStartSignal.set('te-IN', 'శీర్షికను మార్చడానికి చేయండి');
    this.mapStartSignal.set('hi-IN', 'शीर्षक बदलने का कार्रवाई करें');
    this.mapStartSignal.set('kn-IN', 'ಶೀರ್ಷಿಕೆಯನ್ನು ಬದಲಾಯಿಸಲು ನಡೆಸಿ');
    this.mapStartSignal.set('ml-IN', 'ശീര്‍ഷകം മാറ്റാന്‍ ചെയ്യുക');
    this.mapStartSignal.set('fr-FR', 'Effectuer le changement de titre');
    this.mapStartSignal.set('ko-KR', '제목 변경 수행');
    this.mapStartSignal.set('ja-JP', 'タイトルの変更を実行する');
    this.mapStartSignal.set('it-IT', 'Eseguire il cambio titolo');
    this.mapStartSignal.set('de-DE', 'Titeländerung durchführen');
    this.mapStartSignal.set('ar', 'أداء تغيير العنوان');
    this.mapStartSignal.set('sr-RS', 'Izvršite promenu naslova');
    this.mapStartSignal.set('ms-SG', 'Melakukan perubahan judul');
    this.mapStartSignal.set('ms-MY', 'Lakukan perubahan tajuk');
    this.mapStartSignal.set('sq-AL', 'Kryeni ndryshimin e titullit');

    this.mapEndSignal.set('en-US', 'finish change title');
    this.mapEndSignal.set('en-GB', 'Finish change title');
    this.mapEndSignal.set('ta-IN', 'தலைப்பு மாற்றத்தை முடக்கு');
    this.mapEndSignal.set('te-IN', 'శీర్షిక మార్చడానికి ముగింపు');
    this.mapEndSignal.set('hi-IN', 'शीर्षक बदलने को समाप्त करें');
    this.mapEndSignal.set('kn-IN', 'ಶೀರ್ಷಿಕೆಯನ್ನು ಬದಲಾಯಿಸಲು ಮುಗಿಯಿರಿ');
    this.mapEndSignal.set('ml-IN', 'ശീര്‍ഷകം മാറ്റൽ അവസാനിപ്പിക്കുക');
    this.mapEndSignal.set('fr-FR', 'Terminer le changement de titre');
    this.mapEndSignal.set('ko-KR', '제목 변경 완료');
    this.mapEndSignal.set('ja-JP', 'タイトルの変更を完了する');
    this.mapEndSignal.set('it-IT', 'Completare il cambio titolo');
    this.mapEndSignal.set('de-DE', 'Titeländerung abschließen');
    this.mapEndSignal.set('ar', 'إنهاء تغيير العنوان');
    this.mapEndSignal.set('sr-RS', 'Završi promenu naslova');
    this.mapEndSignal.set('ms-SG', 'Selesaikan perubahan judul');
    this.mapEndSignal.set('ms-MY', 'Selesaikan perubahan tajuk');
    this.mapEndSignal.set('sq-AL', 'Përfundo ndryshimin e titullit');

    this.mapInitResponse.set('en-US', 'Please, tell me the new title');
    this.mapInitResponse.set('en-GB', 'Please, tell me the new title');
    this.mapInitResponse.set('ta-IN', 'தயவுசெய்து, புதிய தலைப்பை சொல்லுங்கள்');
    this.mapInitResponse.set('te-IN', 'దయచేసి, కొత్త శీర్షికను చెప్పండి');
    this.mapInitResponse.set('hi-IN', 'कृपया, मुझे नया शीर्षक बताएं');
    this.mapInitResponse.set('kn-IN', 'ದಯವಿಟ್ಟು, ಹೊಸ ಶೀರ್ಷಿಕೆಯನ್ನು ಹೇಳಿ');
    this.mapInitResponse.set('ml-IN', 'ദയവായി, പുതിയ തലക്കെട്ട് പറയുക');
    this.mapInitResponse.set('fr-FR', 'S\'il vous plaît, dites-moi le nouveau titre');
    this.mapInitResponse.set('ko-KR', '새로운 제목을 말해주세요');
    this.mapInitResponse.set('ja-JP', '新しいタイトルを教えてください');
    this.mapInitResponse.set('it-IT', 'Per favore, dimmi il nuovo titolo');
    this.mapInitResponse.set('de-DE', 'Bitte sag mir den neuen Titel');
    this.mapInitResponse.set('ar', 'من فضلك، قل لي العنوان الجديد');
    this.mapInitResponse.set('sr-RS', 'Molim te, reci mi novi naslov');
    this.mapInitResponse.set('ms-SG', 'Sila, beritahu saya tajuk baru');
    this.mapInitResponse.set('ms-MY', 'Sila, beritahu saya tajuk baru');
    this.mapInitResponse.set('sq-AL', 'Ju lutem, më thuaj titullin e ri');

    this.mapActionDone.set('en-US', 'Changing title of the Application to');
    this.mapActionDone.set('en-GB', 'Changing title of the Application to');
    this.mapActionDone.set('ta-IN', 'பயன்பாட்டின் தலைப்பை மாற்றுகின்றது');
    this.mapActionDone.set('te-IN', 'అప్లికేషన్ యొక్క శీర్షికను మార్చినందు');
    this.mapActionDone.set('hi-IN', 'एप्लिकेशन का शीर्षक बदल रहा है');
    this.mapActionDone.set('kn-IN', 'ಅಪ್ಲಿಕೇಶನ್ ಹೆಸರನ್ನು ಬದಲಿಸುತ್ತಿದೆ');
    this.mapActionDone.set('ml-IN', 'അപ്ലിക്കേഷന്റെ തലക്കെട്ട് മാറ്റുന്നു');
    this.mapActionDone.set('fr-FR', 'Changement du titre de l\'application à');
    this.mapActionDone.set('ko-KR', '애플리케이션 제목 변경 중');
    this.mapActionDone.set('ja-JP', 'アプリケーションのタイトルを変更中');
    this.mapActionDone.set('it-IT', 'Cambiamento del titolo dell\'applicazione a');
    this.mapActionDone.set('de-DE', 'Titel der Anwendung ändern zu');
    this.mapActionDone.set('ar', 'تغيير عنوان التطبيق إلى');
    this.mapActionDone.set('sr-RS', 'Menjanje naslova aplikacije na');
    this.mapActionDone.set('ms-SG', 'Menukar judul Aplikasi kepada');
    this.mapActionDone.set('ms-MY', 'Menukar tajuk Aplikasi kepada');
    this.mapActionDone.set('sq-AL', 'Ndryshimi i titullit të Aplikacionit në');
  }
  set titleService(title: Title) {
    this.title = title;
  }
  runAction(input: string, language: string): void {
    this.title?.setTitle(input);
    this.speechSynthesizer.speak(
      `${this.mapActionDone.get(language)}: ${input}`,
      language
    );
  }
}