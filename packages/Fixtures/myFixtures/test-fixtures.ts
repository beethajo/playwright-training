import {test as baseTest ,expect } from '@playwright/test';

import { FramesPage } from '../pages/FramesPage';
import { BrowserWindowsPage } from '../pages/BrowserWindows';
import { AlertPage } from '../pages/AlertPage';
import { FormPage } from '../pages/FormPage';
import { ButtonsPage } from '../pages/ButtonsPage';
import { TextBoxPage } from '../pages/TextBoxPage';
import { RadioButtonPage } from '../pages/RadioButtonsPage';


type Myfixtures = {
    framesPage : FramesPage;
    browserWindowsPage : BrowserWindowsPage;
    alertPage : AlertPage;
    formPage : FormPage;
    buttonsPage : ButtonsPage;
    textBoxPage : TextBoxPage;
    radioButtonPage : RadioButtonPage;
}

export const test = baseTest.extend<Myfixtures>({
    framesPage : async({page},use)=>{
        await use(new FramesPage(page));
    },
    browserWindowsPage:async({page},use)=>{
        await use(new BrowserWindowsPage(page));
    },
    alertPage:async({page},use)=>{
        await use(new AlertPage(page));
    },
    formPage:async({page},use)=>{
        await use(new FormPage(page));
    },
    buttonsPage : async({page},use)=>{
        await use(new ButtonsPage(page));
    },
    textBoxPage:async({page},use)=>{
        await use(new TextBoxPage(page));
    },
    radioButtonPage:async({page},use)=>{
        await use(new RadioButtonPage(page));
    }
})

export {expect} from '@playwright/test';