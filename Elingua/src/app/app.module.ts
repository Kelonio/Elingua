import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

/* modules */

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';


import { VideoPage } from '../pages/module/video/video';
import { VocabularyPage } from '../pages/module/vocabulary/vocabulary';

import { ModalQuiz } from '../pages/home/modal-quiz';

/* componentes*/
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { QuizQuestionComponent } from '../components/quiz-question/quiz-question';
import { SelectQuestionComponent } from '../components/select-question/select-question';
import { MultiSelectQuestionComponent } from '../components/multiselect-question/multiselect-question';
import { SpeechRecognitionQuestionComponent } from '../components/speech-recognition-question/speech-recognition-question';
import { DropWordsQuestionComponent } from '../components/drop-words-question/drop-words-question';
import { SliderQuestionContainerComponent } from '../components/slider-question-container/slider-question-container';
import { ResultModal } from '../components/result/result';
import { RadioQuestionComponent } from '../components/radio-question/radio-question';

/* pages */
import { ModulePage } from '../pages/module/module';
import { MainPage } from '../pages/main/main';

import { InitialPage } from '../pages/initial/initial';
import { SuperlevelPage } from '../pages/superlevel/superlevel';
import { DedicationPage } from '../pages/dedication/dedication';

import { ProfilePage } from '../pages/profile/profile';

import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz';
import { LevelPage } from '../pages/level/level';
import { LevelModal } from '../pages/level/level-modal';
import { FinalTestPage } from '../pages/module/final-test/final-test';

import { GrammarPage } from '../pages/module/grammar/grammar';

import { ComprehensionPage } from '../pages/module/comprehension/comprehension';

/* providers */
import { SpeechRecognition } from '@ionic-native/speech-recognition';


/* pipes */

import { SafeHtml } from "../pipes/SafeHtml";
import { ReplaceBlanks } from "../pipes/ReplaceBlanks"




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizPage,
    LevelPage,
    VideoPage,
    LevelModal,
    ModalQuiz,
    FlashCardComponent,
    QuizQuestionComponent,
    SelectQuestionComponent,
    MultiSelectQuestionComponent,
    RadioQuestionComponent,
    SpeechRecognitionQuestionComponent,
    DropWordsQuestionComponent,
    SliderQuestionContainerComponent,
    ModulePage,
    MainPage,
    InitialPage,
    GrammarPage,
    SuperlevelPage,
    ProfilePage,
    ComprehensionPage,
    VocabularyPage,
    SafeHtml,
    ReplaceBlanks,
    FinalTestPage,
    DedicationPage,
    ResultModal
  ],
  imports: [
    DragulaModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizPage,
    LevelPage,
    VideoPage,
    LevelModal,
    ModalQuiz,
    ModulePage,
    MainPage,
    InitialPage,
    GrammarPage,
    SuperlevelPage,
    ProfilePage,
    ComprehensionPage,
    VocabularyPage,
    FinalTestPage,
    DedicationPage,
    ResultModal
  ],
  providers: [
    SpeechRecognition,
    StatusBar,
    SplashScreen,    
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }







