export abstract class ActionStrategy {
  protected mapStartSignal: Map<string, string> = new Map<string, string>();
  protected mapEndSignal: Map<string, string> = new Map<string, string>();
  protected mapInitResponse: Map<string, string> = new Map<string, string>();
  protected mapFinishResponse: Map<string, string> = new Map<string, string>();
  protected mapActionDone: Map<string, string> = new Map<string, string>();
  constructor() {
    this.mapFinishResponse.set('en-US' , 'Your action has been completed.');
    this.mapFinishResponse.set('en-GB', 'Your action has been completed.');
    this.mapFinishResponse.set('ta-IN', 'உங்கள் செயல் நிறைவுசெய்தது.');
    this.mapFinishResponse.set('te-IN', 'మీ చర్య పూర్తయింది.');
    this.mapFinishResponse.set('hi-IN', 'आपक्रिया पूर्ण हो गई है।');
    this.mapFinishResponse.set('kn-IN', 'ನಿಮ್ಮ ಕ್ರಿಯೆ ಪೂರ್ಣಗೊಂಡಿದೆ.');
    this.mapFinishResponse.set('ml-IN', 'നിങ്ങളുടെ പ്രവർത്തനം പൂർത്തിയാക്കിയിരിക്കുന്നു.');
    this.mapFinishResponse.set('fr-FR', 'Votre action a été accomplie.');
    this.mapFinishResponse.set('ko-KR', '귀하의 작업이 완료되었습니다.');
    this.mapFinishResponse.set('ja-JP', 'あなたのアクションが完了しました。');
    this.mapFinishResponse.set('it-IT', 'La tua azione è stata completata.');
    this.mapFinishResponse.set('de-DE', 'Ihre Aktion wurde abgeschlossen.');
    this.mapFinishResponse.set('ar', 'تم إكمال إجراءك.');
    this.mapFinishResponse.set('sr-RS', 'Ваша акција је завршена.');
    this.mapFinishResponse.set('ms-SG', 'Tindakan anda telah selesai.');
    this.mapFinishResponse.set('ms-MY', 'Tindakan anda telah selesai.');
    this.mapFinishResponse.set('sq-AL', 'Veprimi juaj është kryer.');
  }
  getStartSignal(language: string): string {
    return this.mapStartSignal.get(language) || '';
  }
  getEndSignal(language: string): string {
    return this.mapEndSignal.get(language) || '';
  }
  getInitialResponse(language: string): string {
    return this.mapInitResponse.get(language) || '';
  }
  getFinishResponse(language: string): string {
    return this.mapFinishResponse.get(language) || '';
  }
  abstract runAction(input: string, language: string): void;
}